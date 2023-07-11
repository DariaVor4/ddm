import { FC } from 'react';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import { GUserRoleEnum, useUserCurrentQuery } from '../../api/generated.ts';
import { getRole } from '../../core/roles-checker.ts';
import { useSettingsStore } from '../../store/settings-store.ts';
import { strictPick } from '../../core/strict-lodash/strict-pick.ts';
import { HeaderGuestButtons } from './HeaderGuestButtons.tsx';
import { HeaderUserButtons } from './HeaderUserButtons.tsx';

export const HeaderButtons: FC = () => {
  const { data: { current } = {} } = useUserCurrentQuery();
  const { isDarkTheme, toggleTheme } = useSettingsStore(state => strictPick(state, ['isDarkTheme', 'toggleTheme']));
  const role = getRole(current?.roles);

  return (
    <>
      <IconButton color='inherit' onClick={toggleTheme}>
        {/* {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />} */}
        {isDarkTheme ? <LightModeIcon /> : <NightsStayIcon />}
      </IconButton>
      {role !== GUserRoleEnum.Any ? <HeaderUserButtons /> : <HeaderGuestButtons />}
    </>
  );
};
