import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image.js";
import styles from "./Navbar.module.scss";
import { logo } from "@/assets/dummyData.js";
import UserNav from "./UserNav.js";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const Navbar = () => {
  const [sticky, setSticky, setLoginToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.container} ${sticky ? styles.sticky : null}`}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <Link href="/">
            <Image src={logo} width={215} height={41} alt="logo" />
          </Link>
          <button className={styles.nav_toggle}>
            <FaBars />
          </button>
        </div>
        <div className={styles.nav_links}>
          <ul>
            <li>
              <Link
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="services"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                PORTFOLIO
              </Link>
            </li>
            <li>
              <Link
                to="advantages"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                OUR ADVANTAGES
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                CONTACTS
              </Link>
            </li>
          </ul>
          <UserNav />
        </div>
      </div>
    </nav>
  );
};
