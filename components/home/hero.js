// Imports
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero_container">
      <div className="hero_content">
        <h1>
          Launch. Grow. Stand Out. <br></br>
          <br></br>Your Food Business, Branded Right.
        </h1>
        <Link href="/services">Our Services</Link>
      </div>
      {/* <div className="hero_icons">
        <Image src="/img/hero_icons.png" fill alt="Picture of the author" />
      </div> */}
      <div className="arrow">▼</div>
    </div>
  );
}
