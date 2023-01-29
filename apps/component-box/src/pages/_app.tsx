import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Inspect from 'inspx';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Inspect disabled={false}>
      <ThemeProvider defaultTheme="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </Inspect>
  );
}
