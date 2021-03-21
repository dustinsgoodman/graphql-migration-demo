import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query'

import { Container, SimpleGrid } from '../src/components/atoms';
import { PageHeader } from '../src/components/organisms';
import GlobalStyle from '../src/shared/global-style';

const defaultTitle = 'Rick and Morty Demo';
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={defaultTitle}
        link={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
        meta={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          { property: 'og:title', content: defaultTitle },
          {
            name: 'description',
            content: 'Rick and Morty universe information',
          },
        ]}
      />
      <SimpleGrid direction="column">
        <PageHeader />
        <Container>
          <Component {...pageProps} />
        </Container>
      </SimpleGrid>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
