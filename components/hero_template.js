// Imports
import Link from "next/link";
import Image from "next/image";

export default function HeroTemplate({ title, img }) {
  return (
    <div className="hero_template_container">
      <Image src={`/img/${img}`} fill />
      <div className="hero_template_content">
        <h1>{title}</h1>
      </div>
      {/* <div className="hero_template_icons">
        <Image src="/img/hero_template_icons.png" fill alt="Picture of the author" />
      </div> */}
      <div className="arrow">▼</div>
    </div>
  );
}
