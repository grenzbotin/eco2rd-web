import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import SEO from "../config/defaultSeo";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
