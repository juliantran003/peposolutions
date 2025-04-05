// Imports
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="home_services">
      <h1>
        BRANDING DESIGN <br></br>& BUILD
      </h1>
      <h1>WEBSITE CREATION</h1>
      <h1>FOOD PHOTOGRAPHY</h1>
      <Link href="/services" className="button_1">
        DISCOVER OUR SERVICES
      </Link>
    </div>
  );
}
