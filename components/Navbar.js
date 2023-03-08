import { useState, useEffect } from 'react';
import Link from 'next/link.js';
import Image from 'next/image.js';
import styles from './Navbar.module.scss';
import { logo } from '@/assets/dummyData.js';

export const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.container} ${sticky ? styles.sticky : null}`}>
      <div className={styles.nav_center}>
        <div className={styles.nav_header}>
          <Link href="/">
            <Image src={logo} width={215} height={41} alt="logo" />
          </Link>
        </div>

        <ul className={styles.nav_links}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/">SERVICES</Link>
          </li>
          <li>
            <Link href="/">PORTFOLIO</Link>
          </li>
          <li>
            <Link href="/">OUR ADVANTAGES</Link>
          </li>
          <li>
            <Link href="/">CONTACTS</Link>
          </li>
        </ul>

        <div></div>
      </div>
    </nav>
  );
};
