import Image from 'next/image.js';
import styles from './Page6.module.scss';

export default function Page6({ title, subtitle, desc, timelines }) {
  return (
    <div className="bg-lighter">
      <div className={styles.timelines_container}>
        <div className={styles.timeline_title}>
          <h5>{subtitle}</h5>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_line}>
            <span className={`${styles.line_dot} ${styles.dot_start}`}></span>
            <span className={`${styles.line_dot} ${styles.dot_end}`}></span>
          </div>
          <div className={styles.work_timeline}>
            {timelines.map((item, index) => {
              const { image, id, title, details } = item;
              return (
                <div key={id} className={styles.timeline_status}>
                  <span
                    className={`${styles.line_dot} ${styles.status}`}></span>
                  <div
                    className={`${styles.timeline_content} ${
                      index % 2 !== 0 ? styles.order : null
                    }`}>
                    <h5>0{id}.</h5>
                    <h2>{title}</h2>
                    <p>{details}</p>
                  </div>
                  <div className={styles.timeline_image}>
                    <Image
                      height={300}
                      width={500}
                      src={image}
                      alt="timeline"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
