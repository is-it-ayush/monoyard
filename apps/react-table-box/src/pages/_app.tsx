import { type AppType } from 'next/app';

import { api } from '../utils/api';

import '../styles/globals.css';
import Inspect from 'inspx';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    // By default, Inspect is disabled in production. I've overridden that here to make it easier to see the data in the deployed app since this is just a demo.
    <Inspect disabled={false}>
      <Component {...pageProps} />
    </Inspect>
  );
};

export default api.withTRPC(MyApp);
