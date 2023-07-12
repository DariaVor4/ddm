import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline } from '@mui/material';
import dayjs from 'dayjs';
import { App } from './app.tsx';
import { client } from './api/apollo-client/apollo-client.tsx';
import { QrCodeDialog } from './core/hooks/useQrCode.tsx';
import { AppThemeProvider } from './styles/theme/AppThemeProvider.tsx';

import './styles/global.scss';
import 'dayjs/locale/ru';
import { ConfirmActionDialog } from './core/hooks/useConfirmAction.tsx';

dayjs.locale('ru');

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        {/* <StyledEngineProvider injectFirst> */}
        <AppThemeProvider>
          <CssBaseline enableColorScheme />
          <ConfirmActionDialog />
          <QrCodeDialog />
          <App />
        </AppThemeProvider>
        {/* </StyledEngineProvider> */}
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);
