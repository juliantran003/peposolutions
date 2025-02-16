// Imports
import Head from "next/head";

// Components
import Hero from "../components/home/hero.js";
import Intro from "../components/home/intro.js";
import Services from "@/components/home/services.js";
import Portfolio from "@/components/home/portfolio.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Homepage for Pepo Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Hero />
        <Intro />
        <Services />
        <Portfolio />
      </main>
    </>
  );
}
