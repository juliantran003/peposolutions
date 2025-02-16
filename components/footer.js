// Imports
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <Image src="/img/instagram.png" fill alt="Instagram" />
      </div>
      <div>
        <Image src="/img/logo_header.png" fill alt="Pepo Solutions" />
      </div>
      <Link href="email:to" className="button_1">
        Contact Us
      </Link>
    </footer>
  );
}
