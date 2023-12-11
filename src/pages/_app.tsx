import Meta from '@/components/meta';
import RouteChangeLoader from '@/components/routeChangeLoader';
import { Inter } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <main className={inter.className}>
        <Meta />
        <RouteChangeLoader />
        <Analytics />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
