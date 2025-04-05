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
          description1="Pepo Solutions partnered with Chulo to bring the authentic flavors of Nepalese fried chicken and rice bowls to the streets of London with a fresh, bold branding identity. From the ground up, we crafted a unique and vibrant logo that reflects the rich cultural heritage of Nepal while appealing to the street food crowd."
          description2="To complement the branding, we designed and built a custom frontage for their gazebo stall that ensures their presence is bold and inviting at every market and festival. The clean, modern design combined with vibrant colors and traditional elements stands out and captures the essence of their flavorful offerings.
This rebrand has helped Chulo establish a strong visual identity, attracting new customers and creating a memorable presence in the competitive London street food scene.
"
          img1="/img/chulo.png"
          // img2="/img/bask-street-boys-frontage.JPEG"
          // img3="/img/bask-street-boys-frontage.JPEG"
          // img4="/img/bask-street-boys-frontage.JPEG"
          objectFit="contain"
        />
        {/* <PortfolioArticle
          business="The Frenchie"
          date="2024"
          description1="Pepo Solutions teamed up with The Frenchie to refresh their branding and build a striking new frontage for their stall. We reimagined their logo to reflect their bold, fun, and authentic French street food experience, ensuring their brand stands out in a crowded market."
          description2="WAlongside the rebranding, we’ve been enhancing their social media presence, creating engaging content that amplifies their unique offerings and builds a strong connection with their audience. The new branding and social media strategy are set to increase visibility, drive foot traffic, and solidify The Frenchie’s place as a top choice for French street food lovers."
          img1="/img/street-food-2.jpg"
          // img2="/img/bask-street-boys-frontage.JPEG"
          // img3="/img/bask-street-boys-frontage.JPEG"
          // img4="/img/bask-street-boys-frontage.JPEG"
          objectFit="cover"
        /> */}
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
