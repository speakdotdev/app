import { AppProps } from 'next/app';
import '../css/tailwind.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
