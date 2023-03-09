import { FaMobileAlt } from 'react-icons/fa';
import styles from './RulerRepair.module.scss';

export default function RulerRepair({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.ruler_container}>
        <div className={styles.content_ruler}>
          <h2>{title}</h2>
          <p>Leave your mobile phone number and we will call you back</p>
        </div>
        <form className={styles.form_ctrl} onSubmit={(e) => e.preventDefault()}>
          <p>
            <span>
              <FaMobileAlt />
            </span>{' '}
            Your phone number
          </p>
          <div>
            <input
              type="tel"
              maxLength="10"
              placeholder="0963 6303 68"
              name="phone"
            />
            <button type="submit" className={`btn ${styles.call_btn}`}>
              call me back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
