import RulerRepair from "./RulerRepair.js";
import Link from "next/link.js";
import Image from "next/image.js";
import { FaLocationArrow } from "react-icons/fa";
import { dark_logo } from "@/assets/dummyData.js";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <RulerRepair title="You Still Have a Question?" />
        <div className={styles.copyright}>
          <div className={styles.footer_container}>
            <Link href="/" className={styles.logo}>
              <Image width={230} height={44} src={dark_logo} alt="logo" />
            </Link>
            <div className={styles.content}>
              <div>
                <span>
                  <FaLocationArrow />
                </span>
                <span>CN1: 11B - TL15 - Tân Thạnh Đông - Củ Chi - HCM</span>
              </div>
              <div>
                <span>
                  <FaLocationArrow />
                </span>
                <span>CN2: 89 - Dương Đình Hội - TP Thủ Đức - HCM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
