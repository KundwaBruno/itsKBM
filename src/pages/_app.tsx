import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import { Inter } from "@next/font/google";
import PageLoader from "../components/PageLoader";
import { AnimatePresence } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
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

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  useEffect(() => {
    setTimeout(() => {
      if (showSplash) setShowSplash(false);
    }, 2000);
  }, [showSplash]);

  return (
    <main className={inter.className}>
      <AnimatePresence>
        {showSplash ? <PageLoader /> : <Component {...pageProps} />}
      </AnimatePresence>
    </main>
  );
}

export default MyApp;
