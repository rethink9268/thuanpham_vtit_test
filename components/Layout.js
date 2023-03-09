import { Navbar } from "./Navbar.js";
import Footer from "./Footer.js";
import styles from "./Layout.module.scss";
import Login from "./Login.js";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Login />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
