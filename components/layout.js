// IMPORTS
import Head from "next/head";

import dynamic from "next/dynamic";

const Header = dynamic(() => import("./header"), {
  ssr: false, // This ensures the component is not SSR'd
});

const Footer = dynamic(() => import("./footer"), {
  ssr: false, // This ensures the component is not SSR'd
});
const Frame = dynamic(() => import("./frame"), {
  ssr: false, // This ensures the component is not SSR'd
});
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Frame />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <title>Pepo Solutions</title>
        <meta name="description" content="" key="desc" />
        <meta property="og:title" content={"Julian Tran"} />
        <meta property="og:description" content="" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="keywords" content="" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  );
}
