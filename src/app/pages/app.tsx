'use client'
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { OrderProvider } from '../context/OrderContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <OrderProvider>
      <Component {...pageProps} />
    </OrderProvider>
  );
}

export default MyApp;