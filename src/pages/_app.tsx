import { Inter } from '@next/font/google';
import { DefaultSeo, NextSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect, useState } from 'react';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [showSplash, setShowSplash] = useState<boolean>(true);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  useEffect(() => {
    setTimeout(() => {
      if (showSplash) setShowSplash(false);
    }, 2000);
  }, [showSplash]);

  return (
    <ThemeProvider attribute="class">
      <main className={inter.className}>
        <Component {...pageProps} />
        <DefaultSeo
          title="Kundwa Bruno"
          description="Experienced Front-End Software Engineer from Rwanda 🇷🇼, dedicated to crafting accessible web and mobile solutions."
        />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
