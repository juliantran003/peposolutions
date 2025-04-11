// Imports
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer1">
        <div>
          <Image src="/img/logos/W&B-logo.png" fill alt="Pepo Solutions" />
        </div>
        <p>
          Empowering small food businesses to reach the next step on their
          journey
        </p>
      </div>
      <div className="footer2">
        <div>
          <Image src="/img/instagram.png" fill alt="Pepo Solutions" />
        </div>
        <p>Follow our work on Instagram</p>
      </div>
      <div className="footer3">
        <h3>NAVIGATION</h3>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
        </ul>
      </div>
      <div className="footer4">
        <h3>CONTACT</h3>
        <a href="mailto:peposolutions@gmail.com">peposolutions@gmail.com</a>
      </div>
      {/* <div>
        <Image src="/img/instagram.png" fill alt="Instagram" />
      </div>
      <div>
        <Image src="/img/logos/W&B-logo.png" fill alt="Pepo Solutions" />
      </div>
      <Link href="email:to" className="button_1">
        Contact Us
      </Link> */}
    </footer>
  );
}
