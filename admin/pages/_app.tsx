import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Layout from '../components/layouts/Layout';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { Store, wrapper } from '../store';
import Script from 'next/script';
import PrivateRoute from '../components/private/PrivateRoute';

const  MyApp = ({ Component, pageProps }: AppProps) => {
  return (
        <Provider store={Store}>
          
            <div className="wrapper">
              <Head>
                  <link rel="stylesheet" href="/plugins/fontawesome-free/css/all.min.css"/>
                  <link rel="stylesheet" href="/css/admin_css/adminlte.min.css"/>
              </Head>
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </div>
          <Script src="/plugins/jquery/jquery.min.js" strategy="beforeInteractive"/>
          <Script src="/plugins/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"/>
          <Script src="/js/admin_js/adminlte.min.js" strategy="beforeInteractive"/>
        
    </Provider>
  );
}
// const makestore = ()=>Store;
// const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
