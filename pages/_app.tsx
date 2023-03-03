import 'styles/index.scss';

import { Layout } from 'components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import SEO from '../next-seo.config';

const keywords = [
  'Charles',
  'Charles Liu',
  'University of Waterloo',
  'Software Developer',
  'CS',
  'Computer Science',
  'CertiK',
  'On Deck',
  'Student',
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="keywords" content={keywords.join(', ')} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default appWithTranslation(MyApp);
