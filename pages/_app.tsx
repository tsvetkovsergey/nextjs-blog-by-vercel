// This is a top-level React component that wraps
// all pages in your application. You can use this
// component to keep state when navigating between
// pages, or to add global styles. You need to
// restart the development server when you add
// pages/_app.js.

import { AppProps } from 'next/app';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
