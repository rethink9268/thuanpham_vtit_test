import React from "react";
import Image from "next/image.js";
import styles from "./Page1.module.scss";
import RulerRepair from "./RulerRepair.js";

export default function Page1({ url, info_box }) {
  return (
    <div className={styles.container} id="home">
      <div className={styles.grid_container}>
        <article className={styles.image_container}>
          <Image height={560} width={362} src={url} alt="Vncurtains" />
        </article>
        <article className={styles.content}>
          <h5>We have extensive experience in repair</h5>
          <h1>Your Repair Our Concern</h1>
          <div className={styles.plus}>
            <div className={styles.plus_container}>
              <Image width={50} height={50} src={info_box} alt="svg" />
              <div className={styles.content_plus}>
                <h2>
                  Repair
                  <br />
                  Your Home
                </h2>
                <p>From 120$ / m</p>
              </div>
            </div>

            <div className={styles.plus_container}>
              <Image width={50} height={50} src={info_box} alt="svg" />
              <div className={styles.content_plus}>
                <h2>
                  Build
                  <br />
                  Your Home
                </h2>
                <p>From 120$ / m</p>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className={styles.ruler_container}>
        <RulerRepair title="Free evaluation of your project" />
      </div>
    </div>
  );
}
