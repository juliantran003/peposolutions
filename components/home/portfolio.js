// Imports
import Link from "next/link";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="home_portfolio">
      <h1>MEET OUR CLIENTS</h1>

      <Link href="/portfolio" className="button_1">
        EXPLORE OUR PORTFOLIO
      </Link>
    </div>
  );
}
