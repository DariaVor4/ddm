import {
  Button, ButtonToolbar, Form, InputGroup, Panel, Schema, Stack,
} from 'rsuite';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import EmailFillIcon from '@rsuite/icons/EmailFill';
import UnvisibleIcon from '@rsuite/icons/Unvisible';
import VisibleIcon from '@rsuite/icons/Visible';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@rsuite/icons';
import { delay } from 'lodash';
import { makeVar, useReactiveVar } from '@apollo/client';
import { GMutationLoginByPasswordArgs, useLoginByPasswordMutation } from '../../api/generated';
import { AppRoutesEnum } from '../routes/app-routes';
import { LocalStorageKeys } from '../../api/local-storage-keys';

const model = Schema.Model<GMutationLoginByPasswordArgs>({
  email: Schema.Types.StringType().isEmail('Некорректная почта').isRequired('Обязательное поле'),
  password: Schema.Types.StringType().isRequired('Обязательное поле'),
});

const isSubmitDisabledVar = makeVar<boolean>(false);

function LoginPage() {
  const isSubmitDisabled = useReactiveVar(isSubmitDisabledVar);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formValue, setFormValue] = useState<GMutationLoginByPasswordArgs>({ email: '', password: '' });
  const [loginMutation, {
    data, loading, error, client,
  }] = useLoginByPasswordMutation({ variables: formValue });
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.loginByPassword) {
      localStorage.setItem(LocalStorageKeys.AccessTokenKey, data?.loginByPassword || '');
      navigate(AppRoutesEnum.Home);
      client.resetStore().then(() => toast.success('Авторизация успешна'));
    }
    if (error) {
      isSubmitDisabledVar(true);
      delay(() => isSubmitDisabledVar(false), 6000);
      toast.error('Почта или пароль неверны', { autoClose: 5000 });
    }
  }, [data, error, navigate, client]);

  const handlerLogin = async (checkStatus: unknown) => {
    if (typeof checkStatus !== 'boolean') return;
    if (checkStatus) {
      await toast.promise(loginMutation(), { pending: 'Авторизация...' });
    } else {
      toast.error('Некорректные данные входа');
    }
  };

  return (
    <Stack justifyContent='center'>
      <Panel header={<h3 style={{ textAlign: 'center' }}>Вход</h3>} bordered>
        <Form
          model={model}
          formValue={formValue}
          checkTrigger='blur'
          disabled={loading}
          onSubmit={handlerLogin}
          onChange={setFormValue as any}
        >
          <Form.Group controlId='email'>
            <Form.ControlLabel>Почта</Form.ControlLabel>
            <InputGroup inside>
              <Form.Control placeholder='example@example.com' name='email' />
              <InputGroup.Addon>
                <EmailFillIcon />
              </InputGroup.Addon>
            </InputGroup>
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.ControlLabel>Пароль</Form.ControlLabel>
            <InputGroup>
              <Form.Control name='password' type={isPasswordVisible ? 'text' : 'password'} />
              <InputGroup.Button onClick={() => setIsPasswordVisible(v => !v)}>
                <Icon as={isPasswordVisible ? UnvisibleIcon : VisibleIcon} />
              </InputGroup.Button>
            </InputGroup>
          </Form.Group>
          <ButtonToolbar className='flex justify-end'>
            <Button disabled={loading || isSubmitDisabled} as={Link} to={AppRoutesEnum.Registration} appearance='link'>Регистрация</Button>
            <Button disabled={loading || isSubmitDisabled} appearance='primary' type='submit'>Вход</Button>
          </ButtonToolbar>
        </Form>
      </Panel>
    </Stack>
  );
}
export default LoginPage;
