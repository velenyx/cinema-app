import type { AppProps } from 'next/app';

import { MainProvider } from '~/utils';

import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
};

export default App;
