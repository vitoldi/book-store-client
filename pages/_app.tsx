import '../styles/globals.scss'
import '../styles/variables.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
}

export default wrapper.withRedux(MyApp)
