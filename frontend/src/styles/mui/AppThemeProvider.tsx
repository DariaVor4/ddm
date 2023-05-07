import { FC, PropsWithChildren } from 'react';
import { ThemeProvider } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { injectStyle } from 'react-toastify/dist/inject-style';
import useMainStore from '../../store/theme-store';
import { themeDark, themeLight } from './theme';

injectStyle();

const AppThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { isDarkTheme } = useMainStore();

  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
      <ToastContainer
        theme={isDarkTheme ? 'dark' : 'colored'}
        position='bottom-left'
      />
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
