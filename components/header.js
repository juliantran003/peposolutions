// Imports
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Header() {
  const [burger, setBurger] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const clickFalse = () => {
    setBurger(false);
    setBurgerMenu(false);
  };
  const clickTrue = () => {
    setBurger(true);
    setBurgerMenu(true);
  };
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
  const [myNav, setmyNav] = useState(document.getElementById("header"));

  useEffect(() => {
    setmyNav(document.getElementById("header"));
  }, []);
  window.onscroll = function () {
    if (window.scrollY > window.innerHeight - 80) {
      myNav.classList.add("scrolled");
    } else {
      myNav.classList.remove("scrolled");
    }
  };

  return (
    <header className="header_container" id="header">
      <div className="header_grid">
        <div className="header_grid_box_1">
          <div className="header_logo" onClick={() => router.push("/")}>
            <Image src="/img/logos/W&B-logo.png" fill alt="Pepo Solutions" />
          </div>
        </div>
        <div className="header_grid_box_2">
          <menu className="header_menu">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            {/* <Link href="/contact">Contact</Link> */}
          </menu>
        </div>
        <div className="header_grid_box_3">
          <a className="header_button" href="mailto:peposolutions@gmail.com">
            GET IN TOUCH{" "}
          </a>
        </div>
        <div className="burger_container" onClick={() => clickTrue()}>
          <Image fill src="/img/burger-bar.png" />
        </div>
        <div className={burgerMenu ? "burger_menu" : "burger_menu_hide"}>
          <div className="burger_cancel" onClick={() => clickFalse()}>
            <Image fill src="/img/cancel.png" />
          </div>

          <Link href="/" onClick={() => clickFalse()}>
            Home
          </Link>
          <Link href="/services" onClick={() => clickFalse()}>
            Services
          </Link>
          <Link href="/portfolio" onClick={() => clickFalse()}>
            Portfolio
          </Link>
          <Link href="/about" onClick={() => clickFalse()}>
            About
          </Link>
        </div>
      </div>
    </header>
  );
}
