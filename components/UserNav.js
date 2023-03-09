import { useUserContext } from "@/context/userContext.js";
import Image from "next/image.js";
import styles from "./UserNav.module.scss";

const url =
  "https://vncurtains.com/wp-content/uploads/2021/10/lawyer-testimonials-2.jpg";

export default function UserNav() {
  const { user, setLoginToggle, setUser } = useUserContext();
  const handleClick = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.button_container}>
        {!user ? (
          <div className={styles.button_login}>
            <button onClick={() => setLoginToggle(true)}>Login</button>
            <span> / </span>
            <button>Register</button>
          </div>
        ) : (
          <div className={styles.avatar}>
            <div className={styles.image_container}>
              <Image src={url} width={40} height={40} alt="user" />
              <button onClick={handleClick}>Log out</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
