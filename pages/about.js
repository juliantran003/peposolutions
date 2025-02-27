import Head from "next/head";
import Image from "next/image";
import HeroTemplate from "@/components/hero_template";
export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Background information about Pepo Solutions"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="about">
        <HeroTemplate title="about us" img="discussion.jpg" />
        <div className="about_logo">
          <Image fill src="/img/logos/B&W-with-black-outline.png" />
        </div>
        <h3>
          Welcome! I’m Jose, the founder of Pepo Solutions, and a passionate
          advocate for the street food industry. My journey into this vibrant
          world began unexpectedly—one day, a flatmate needed a last-minute hand
          at a street food stall, and I jumped in to help. From that first
          experience, I fell in love with the ever-changing environment and the
          unique sense of community among street food vendors. Years later, I’m
          still deeply involved, cooking up paella with one of London’s iconic
          street food traders, JamonJamon. After all these years, the sizzle of
          the pan and the smiles of satisfied customers still bring me joy.
        </h3>
        <h2>My Experience</h2>
        <p>
          Over the past 12 years, I’ve worn many hats in the street food scene.
          I’ve managed various stalls and worked with multiple vendors, gaining
          insight into the ups and downs that come with this industry. My career
          has also included three years with Streetdots, an app-based street
          trading operator, where I helped simplify the process of finding ideal
          trading spots for vendors. Later, I joined Kerb, where I served as a
          market manager for over two years, overseeing food markets and
          organizing catering events. These experiences gave me a solid
          understanding of what it takes to succeed in this fast-paced,
          competitive world.
        </p>
        <h2>Why Branding & Consulting?</h2>
        <p>
          With a background in graphic design, I’ve always been drawn to the
          power of branding. Transitioning into consulting allowed me to blend
          my love for design with my street food expertise, creating a niche
          where I could truly make a difference. At Pepo Solutions, my goal is
          to give small food businesses the tools they need to succeed, building
          authentic brands that resonate with their customers. I’m here to help
          simplify the branding and business side, empowering food entrepreneurs
          to shine.
        </p>
        <h2>My Approach</h2>
        <p>
          When you work with me, you’ll find a personal, hands-on approach. I
          bring creativity, problem-solving skills, and a deep understanding of
          the unique challenges in street food. My goal is to build partnerships
          rooted in trust and authenticity, offering practical solutions that
          are tailored to each business.
        </p>
      </main>
    </>
  );
}
