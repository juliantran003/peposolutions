// Imports
import Link from "next/link";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="home_intro">
      <div className="home_intro_info">
        {" "}
        <h3>
          Street food business owners have enough on their plate just running
          their business. Leave the the rest to us !
        </h3>
        <p>
          Empowering small food businesses to reach the next step on their
          journey. Pepo Solutions is a branding consultancy based in London. Our
          founder, Jose Moreno (Pepo) is a passionate advocate and ex-member of
          the street food industry. Our company’s purpose is to help street food
          business owners grow their business through branding design, social
          media and photography. <br></br>
          <br></br>From menus to front-of-shops, you can leave your business in
          safe hands with us !
        </p>
      </div>

      {/* <div className="home_services_pictures">
        <Image src="/img/home_services_pictures.png" fill alt="" />
      </div> */}
    </div>
  );
}
