import Head from "next/head";
import HeroTemplate from "@/components/hero_template";
import PortfolioArticle from "@/components/portfolio_article";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio for Pepo Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="portfolio">
        <HeroTemplate title="MEET OUR CLIENTS" img="philly-1.jpg" />
        <PortfolioArticle
          business="Chulo"
          date="2025"
          description1="Pepo Solutions teamed up with Philly Philly to design a bold new logo that captures the essence of their delicious, Philly-inspired street food. The sleek, modern design combines strong typography with a dynamic color scheme, making it instantly recognizable. To enhance visibility, Pepo Solutions also installed a striking logo display lightbox, ensuring the brand stands out day and night."
          description2="This transformation has not only elevated Philly Philly’s professional image but has also attracted more customers, increased social media buzz, and reinforced its identity as a go-to spot for authentic street food flavors."
          img1="/img/chulo.png"
          // img2="/img/bask-street-boys-frontage.JPEG"
          // img3="/img/bask-street-boys-frontage.JPEG"
          // img4="/img/bask-street-boys-frontage.JPEG"
          objectFit="contain"
        />
        <PortfolioArticle
          business="Bask Street Boys"
          date="2024"
          description1="Pepo Solutions partnered with Bask Street Boys to revamp their street food stall with a brand new frontage that captures the energy of their brand. This transformation not only enhanced the stall’s visibility but also created a more inviting atmosphere, drawing in more customers and boosting sales."
          description2="With a stronger brand presence, Bask Street Boys now stands out in the bustling street food scene, making a lasting impression on both loyal patrons and new visitors alike."
          img1="/img/bask-street-boys.jpg"
          // img2="/img/bask-street-boys-frontage.JPEG"
          // img3="/img/bask-street-boys-frontage.JPEG"
          // img4="/img/bask-street-boys-frontage.JPEG"
          objectFit="cover"
        />

        <PortfolioArticle
          business="Philly Philly"
          date="2024"
          description1="Pepo Solutions teamed up with Philly Philly to design a bold new logo that captures the essence of their delicious, Philly-inspired street food. The sleek, modern design combines strong typography with a dynamic color scheme, making it instantly recognizable. To enhance visibility, Pepo Solutions also installed a striking logo display lightbox, ensuring the brand stands out day and night."
          description2="This transformation has not only elevated Philly Philly’s professional image but has also attracted more customers, increased social media buzz, and reinforced its identity as a go-to spot for authentic street food flavors."
          img1="/img/philly-logo.png"
          // img2="/img/bask-street-boys-frontage.JPEG"
          // img3="/img/bask-street-boys-frontage.JPEG"
          // img4="/img/bask-street-boys-frontage.JPEG"
          objectFit="contain"
        />
      </main>
    </>
  );
}
