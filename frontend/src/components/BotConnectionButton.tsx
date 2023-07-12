import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LinkIcon from '@mui/icons-material/Link';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import QrCodeIcon from '@mui/icons-material/QrCode';
import {
  IconButton, Link, TextField, TextFieldProps, Tooltip,
} from '@mui/material';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import {
  GBotEnum,
  GUserCurrentQuery,
  refetchUserCurrentQuery,
  useBotConnectionLinkQuery,
  useBotDisconnectMutation,
  refetchBotConnectionLinkQuery,
  useBotConnectedSubscription,
  UserCurrentDocument,
} from '../api/generated.ts';
import TgLogo from '../assets/tg_logo.svg';
import VkLogo from '../assets/vk_logo.svg';
import { useConfirmAction } from '../core/hooks/useConfirmAction.tsx';
import { useCurrentUser } from '../core/hooks/useCurrentUser.ts';
import { useQrCodeDialog } from '../core/hooks/useQrCode.tsx';
import { client } from '../api/apollo-client/apollo-client.tsx';

type BotConnectionButtonProps = TextFieldProps & {
  botType: GBotEnum;
};

type UserEntity = GUserCurrentQuery['current']['user'];

export const BotConnectionButton: FC<BotConnectionButtonProps> = ({ botType, ...textFieldProps }) => {
  const externalIdKey: keyof UserEntity = botType === GBotEnum.Telegram ? 'telegramId' : 'vkId';
  const botName = botType === GBotEnum.Telegram ? 'Telegram' : 'VK';
  const logo = botType === GBotEnum.Telegram ? TgLogo : VkLogo;

  // Подключен ли бот?
  const [current] = useCurrentUser();
  const isBotConnected = !!current?.user[externalIdKey];

  // Получение ссылки для подключения бота
  const { open: openQrCodeDialog, close: closeQrCodeDialog } = useQrCodeDialog();
  const { data: { botConnectionLink } = {} } = useBotConnectionLinkQuery({
    variables: { input: { botType } },
    skip: isBotConnected,
  });
  const onOpenQrCode = async () => {
    if (!botConnectionLink) return;
    openQrCodeDialog({
      link: botConnectionLink,
      title: `Подключение ${botName} бота`,
      description: `Отсканируйте код и перейдите по ссылке для привязки бота уведомлений в ${botName}`,
    });
  };
  const [isCopied, setIsCopied] = useState(false);
  const onCopyLink = async () => {
    if (!botConnectionLink) return;
    await navigator.clipboard.writeText(botConnectionLink).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    });
  };

  // Подписка на подключение бота
  useBotConnectedSubscription({
    onData: async data => {
      if (data?.data.data?.botConnected === botType) {
        toast.success(`Подключен бот ${botName}!`);
        closeQrCodeDialog();
        await client.refetchQueries({ include: [UserCurrentDocument] });
      }
    },
  });

  // Отвязка бота
  const [botDisconnectMutation] = useBotDisconnectMutation({
    variables: { input: { botType } },
    refetchQueries: [refetchUserCurrentQuery(), refetchBotConnectionLinkQuery({ input: { botType } })],
  });
  const botDisconnect = useConfirmAction({
    title: 'Отвязать бота?',
    message: `Вы действительно хотите отвязать ${botName} бота уведомлений?`,
    action: botDisconnectMutation,
  });

  // JSX
  return (
    <TextField
      {...textFieldProps}
      error={!isBotConnected}
      InputLabelProps={{ shrink: true }}
      label={botName}
      value={isBotConnected ? 'Подключен!' : 'Не подключен'}
      InputProps={{
        startAdornment: (
          <Tooltip title={isBotConnected ? '' : `❗ Подключите ${botName} для получения важных уведомлений`}>
            <img
              alt={`${botName} logo`}
              className='m-2 ml-0'
              src={logo}
              width={24}
            />
          </Tooltip>
        ),
        endAdornment: (
          <div className='flex items-center'>
            {isBotConnected && (
              <Tooltip title='Отвязать бота'>
                <IconButton size='small' onClick={() => botDisconnect()}><LinkOffIcon /></IconButton>
              </Tooltip>
            )}
            {!isBotConnected && (
              <Tooltip title='Открыть ссылку для подключения бота'>
                <Link href={botConnectionLink || ''} target='_blank'><LinkIcon /></Link>
              </Tooltip>
            )}
            {!isBotConnected && (
              // Set Tooltip background color to green
              <Tooltip color={isCopied ? 'success' : undefined} title={isCopied ? '✅ Скопировано!' : 'Скопировать ссылку'}>
                <IconButton size='small' onClick={onCopyLink}><ContentCopyIcon /></IconButton>
              </Tooltip>
            )}
            {!isBotConnected && (
              <Tooltip title='Открыть QR-код для подключения бота'>
                <IconButton size='small' onClick={onOpenQrCode}><QrCodeIcon /></IconButton>
              </Tooltip>
            )}
          </div>
        ),
      }}
    />
  );
};
