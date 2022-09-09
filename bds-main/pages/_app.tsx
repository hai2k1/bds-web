import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NextPageWithLayout } from '../page';
import { wrapper } from '../reducers/store';
import '../styles/globals.css';
import '../styles/post.css';
interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  const [showing, setShowing] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setShowing(true);
  }, []);
  if (!showing) {
    return null;
  }
  return getLayout(<Component key={router.asPath} {...pageProps} />);
}

export default wrapper.withRedux(MyApp);
