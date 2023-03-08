import '@/styles/globals.css';
import { Layout } from '@/components/Layout.js';
import { Inter } from 'next/font/google';
import { Kumbh_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const kumbh = Kumbh_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${kumbh.style.fontFamily};
        }
        p {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}
