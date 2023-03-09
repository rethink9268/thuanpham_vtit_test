import { useRef } from "react";
import Link from "next/link.js";
import { useUserContext } from "@/context/userContext.js";
import { BsX } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import styles from "./Login.module.scss";

export default function Login() {
  const nameRef = useRef(null);
  const passRef = useRef(null);

  const { loginToggle, setLocalStorageUser, setLoginToggle } = useUserContext();

  function handleSubmit(e) {
    e.preventDefault();
    setLocalStorageUser({
      name: nameRef.current.value,
      pass: passRef.current.value,
    });
    setLoginToggle(false);
  }

  return (
    <div className={`${styles.overlay} ${loginToggle && styles.active}`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h5>Sign In</h5>
          <span onClick={() => setLoginToggle(false)}>
            <BsX />
          </span>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formCtrl}>
            <label htmlFor="name">User name: </label>
            <input
              ref={nameRef}
              id="name"
              type="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className={styles.formCtrl}>
            <label htmlFor="password">Password: </label>
            <input
              ref={passRef}
              type="password"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className={styles.check}>
            <label htmlFor="check">
              <input type="checkbox" id="check" /> <span>Remember me</span>
            </label>
            <Link href="#">Forgot password?</Link>
          </div>
          <button className="btn" type="submit" style={{ width: "100%" }}>
            Login
          </button>
        </form>
        <div className={styles.create_account}>
          <CiUser />
          <p>No account yet?</p>
          <Link href="#">CREATE AN ACCOUNT</Link>
        </div>
      </div>
    </div>
  );
}
