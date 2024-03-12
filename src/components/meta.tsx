import data from '@/lib/constants/data';
import { useTheme } from 'next-themes';
import Head from 'next/head';

const Meta = () => {
  const { full__name, homeDescription, prodUrl, meta__img } = data;
  const { theme } = useTheme();

  return (
    <Head>
      <title>{full__name}</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />

      {/* <!-- Primary Meta Tags --> */}
      <title>{full__name}</title>
      <meta name="title" content={full__name} />
      <meta name="description" content={homeDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content={theme === 'light' ? '#FFFFFF' : '#000000'} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={prodUrl} />
      <meta property="og:title" content={full__name} />
      <meta property="og:description" content={homeDescription} />
      <meta property="og:image" content={meta__img} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={prodUrl} />
      <meta property="twitter:title" content={full__name} />
      <meta property="twitter:description" content={homeDescription} />
      <meta property="twitter:image" content={meta__img} />
    </Head>
  );
};

export default Meta;
