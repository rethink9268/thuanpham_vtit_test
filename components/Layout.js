import { Navbar } from './Navbar.js';
import Footer from './Footer.js';
import styles from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
