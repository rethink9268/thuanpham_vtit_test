import Link from "next/link.js";
import Image from "next/image.js";
import styles from "./Page5.module.scss";

export default function Page5({ title, subtitle, desc, items, info_box }) {
  return (
    <div className="section-center" id="advantages">
      <div className={styles.container}>
        <article className={styles.advantages_title}>
          <h5>{subtitle}</h5>
          <h1>{title}</h1>
          <p>{desc}</p>
          <Link href="/" className="btn">
            view more
          </Link>
        </article>
        <article className={styles.advantages_content}>
          {items.map((item) => {
            const { id, title, details } = item;
            return (
              <div key={id} className={styles.plus_container}>
                <Image src={info_box} width={35} height={35} alt="svg" />
                <div className={styles.content_plus}>
                  <h5>{id}.</h5>
                  <h2>{title}</h2>
                  <p>{details}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
}
