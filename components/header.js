// Imports
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").classList.remove("hidden");
    } else {
      document.getElementById("header").classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <header className="header_container" id="header">
      <div className="header_grid">
        <div className="header_grid_box_1">
          <div className="header_logo" onClick={() => router.push("/")}>
            <Image src="/img/logo_header.png" fill alt="Pepo Solutions" />
          </div>
        </div>
        <div className="header_grid_box_2">
          <menu className="header_menu">
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </menu>
        </div>
        <div className="header_grid_box_3">
          <Link className="header_button" href="/contact">
            Get a quote
          </Link>
        </div>
      </div>
    </header>
  );
}
