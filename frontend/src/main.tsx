import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline } from '@mui/material';
import dayjs from 'dayjs';
import AppRoutes from './views/routes/AppRoutes.tsx';
import client from './api/apollo-client.tsx';
import AppThemeProvider from './styles/mui/AppThemeProvider.tsx';

import './styles/global.scss';
import 'dayjs/locale/ru';

dayjs.locale('ru');

/* ReactDOM. */createRoot(document.getElementById('root') as HTMLElement).render(
  </* React. */StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        {/* <StyledEngineProvider injectFirst> */}
        <AppThemeProvider>
          <CssBaseline enableColorScheme />
          <AppRoutes />
        </AppThemeProvider>
        {/* </StyledEngineProvider> */}
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
);
