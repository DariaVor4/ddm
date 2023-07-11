import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { useSettingsStore } from '../../store/settings-store.ts';
import { themeDark, themeLight } from './mui-theme.ts';

injectStyle();

export const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isDarkTheme } = useSettingsStore();

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <ToastContainer
        position='bottom-left'
        theme={isDarkTheme ? 'dark' : 'colored'}
      />
      {children}
    </ThemeProvider>
  );
};
