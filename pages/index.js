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
        <meta name="title" content="Pepo Solutions Homepage" />
        <meta
          name="description"
          content="  Empowering small food businesses to reach the next step on their
          journey. Pepo Solutions is a branding consultancy based in London. Our
          founder, Jose Moreno (Pepo) is a passionate advocate and ex-member of
          the street food industry. Our company’s purpose is to help street food
          business owners grow their business through branding design, social
          media and photography."
        />
        <meta
          name="keywords"
          content="pepo, solutions, peposolutions, street, food, branding, company, design, business, grow, social, media, food, photography"
        />
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
