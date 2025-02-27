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
          title="BRANDING DESIGN & BUILD"
          text="At Pepo Solutions, we are committed to crafting unique and impactful brand identities that cater to the personal needs of each client. We understand that every food vendor has a distinct vision, style, and audience, which is why we take a tailored approach to every project. From eye-catching logos to engaging packaging and strategic marketing, we ensure that our designs not only capture the essence of each business but also resonate with its customers. Our goal is to bring every client’s vision to life, helping them stand out in the vibrant world of street food."
          img="/img/design.jpg"
        />
        <ServicesArticle
          title="food photography"
          text="Our food photography service is designed to make every dish look as irresistible as it tastes. We capture the essence of each client’s culinary creations with stunning, high-quality imgs that showcase vibrant colors, rich textures, and mouthwatering details. Whether for social media, menus, or promotional materials, our photography highlights the unique character of every street-food brand, drawing customers in with visuals that tell a story. With a keen eye for composition and lighting, we ensure that every shot reflects the passion and craftsmanship behind the food, helping our clients leave a lasting impression."
          img="/img/street-food-photography-2.jpg"
        />

        <ServicesArticle
          title="SOCIAL MEDIA MANAGEMENT"
          text="Our food photography service is designed to make every dish look as irresistible as it tastes. We capture the essence of each client’s culinary creations with stunning, high-quality images that showcase vibrant colors, rich textures, and mouthwatering details. Whether for social media, menus, or promotional materials, our photography highlights the unique character of every street-food brand, drawing customers in with visuals that tell a story. With a keen eye for composition and lighting, we ensure that every shot reflects the passion and craftsmanship behind the food, helping our clients leave a lasting impression."
          img="/img/social-media.jpg"
        />

        <Link href="/contact" className="button_1">
          GET IN TOUCH
        </Link>
      </main>
    </>
  );
}
