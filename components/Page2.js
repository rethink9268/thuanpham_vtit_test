import Link from 'next/link.js';
import Image from 'next/image.js';
import styles from './Page2.module.scss';

export default function Page2({ url }) {
  return (
    <div className="section-center">
      <div className={styles.container}>
        <article className={styles.image_container}>
          <Image src={url} width={440} height={520} alt="Page 2" />
        </article>
        <article className={styles.content}>
          <h5>What can expect</h5>
          <h1>Comprehensive repair of all types of housing</h1>
          <div>
            <p>
              Distinguished by the quality of our people and our relentless
              pursuit of the most successful results, we align our capabilities
              with the goals of our clients to ensure lasting positive impact.
              <br />
              <br />
              The core of our company is held by our invariable values - ethics,
              safety, quality, people, as well as our covenants: punctuality,
              honesty, respect, cooperation, trust.
            </p>
          </div>
          <Link href="/" className="btn link-btn">
            Read more
          </Link>
        </article>
      </div>
    </div>
  );
}
