import styles from './Page3.module.scss';
import Link from 'next/link.js';
import Image from 'next/image.js';

export default function Page3({ url, check_box }) {
  return (
    <div className="section-center">
      <div className={styles.container}>
        <article className={styles.image_container}>
          <Image src={url} width={440} height={520} alt="banner" />
        </article>
        <article className={styles.content}>
          <h5>Our services</h5>
          <h1>Here&apos;s what we can do</h1>
          <p className={styles.details}>
            With us you will build a house from scratch, perform the necessary
            finishing work and fully complete the house. Our experience in
            construction services is more than 10 years.
          </p>

          <ul className={styles.checks}>
            <li>
              <Image src={check_box} alt="check" height={35} width={35} />
              <p>Apartment renovation</p>
            </li>
            <li>
              <Image src={check_box} alt="check" height={35} width={35} />
              <p>Electrical wiring</p>
            </li>
            <li>
              <Image src={check_box} alt="check" height={35} width={35} />
              <p>The interior design</p>
            </li>
            <li>
              <Image src={check_box} alt="check" height={35} width={35} />
              <p>Furniture to order</p>
            </li>
            <li>
              <Image src={check_box} alt="check" height={35} width={35} />
              <p>Plumbing installation</p>
            </li>
            <li>
              <Image src={check_box} alt="check" height={35} width={35} />
              <p>Facade insulation</p>
            </li>
          </ul>
          <Link href="/" className="btn">
            Explore Products
          </Link>
        </article>
      </div>
    </div>
  );
}
