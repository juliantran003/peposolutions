import Head from "next/head";
import HeroTemplate from "@/components/hero_template";
import ServicesArticle from "@/components/services_article";
import Link from "next/link";

export default function Services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Services offered by Pepo Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="services">
        <HeroTemplate
          title="A COMPLETE BRANDING SOLUTION"
          img="street-food-1.jpg"
        />
        <ServicesArticle
          title="Branding Design"
          text="At Pepo Solutions, we specialize in crafting unique and impactful brand identities tailored to the vision of each client. We understand that every food vendor has a distinct style and audience, which is why we take a personalized approach to every project. From eye-catching logos to packaging, t-shirts, aprons, banners, and other branded materials, we ensure your business stands out with a cohesive and professional look. Whether you're starting fresh or refining your existing brand, we bring your vision to life with bold and authentic design."
          img="/img/design.jpg"
        />
        <ServicesArticle
          title="Build Your Front Shop"
          text="A strong brand deserves a striking presence. At Pepo Solutions, we don’t just create branding—we help you bring it to life. Whether you have an existing brand or one we’ve designed for you, we build custom front-of-shop setups that make an impact at markets, festivals, and events. From gazebos to signage and menu boards, we ensure your stall looks professional, inviting, and aligned with your brand identity."
          img="/img/philly-1.jpg"
        />
        <ServicesArticle
          title="Website Creation"
          text="In today’s digital world, having a strong online presence is just as important as having a great stall. We create sleek, professional websites tailored to food businesses, making it easy for customers to find you, explore your menu, and connect with your brand. Whether you need a simple portfolio site or a fully customized online platform, we design and build websites that reflect your business’s identity and help you stand out in the competitive food scene."
          img="/img/social-media.jpg"
        />
        <ServicesArticle
          title="food photography"
          text="Our food photography service is designed to make every dish look as irresistible as it tastes. We capture the essence of each client’s culinary creations with stunning, high-quality images that showcase vibrant colors, rich textures, and mouthwatering details. Whether for social media or promotional materials, our photography highlights the unique character of every street-food brand, drawing customers in with visuals that tell a story. With a keen eye for composition and lighting, we ensure that every shot reflects the passion and craftsmanship behind the food, helping our clients leave a lasting impression."
          img="/img/street-food-photography-2.jpg"
        />

        <Link href="/contact" className="button_1">
          GET IN TOUCH
        </Link>
      </main>
    </>
  );
}
