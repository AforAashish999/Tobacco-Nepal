import styles from "./Contact-Info.module.css"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className={styles.info} >
      <h1 className={styles.info__heading} >
        Contact Information
      </h1>

      <div className={styles.info__itemWrapper}>
        <h2 className={styles.info__item}>
          Our address
        </h2>
        <p className={styles.info__description} >
          Laukahi 56713, Sunsari District, Nepal
        </p>
      </div>

      <div className={styles.info__itemWrapper}>
        <h2 className={styles.info__item}>
          Email us
        </h2>
        <p className={styles.info__description} >
          info@tobacconepal.com
        </p>
      </div>

      <div className={styles.info__itemWrapper}>
        <h2 className={styles.info__item}>
          Call us
        </h2>
        <p className={styles.info__description} >
          +977-9801800741
        </p>
      </div>

      <div className={styles.info__itemWrapper}>
        <h2 className={styles.info__item}>
          Business Hours
        </h2>
        <p className={`${styles.info__description} ${styles['info__description--gap']}`} >
          Monday - Friday: 9:00 AM - 5:00 PM
        </p>
        <p className={styles.info__description} >
          Saturday, Sunday : Closed
        </p>
      </div>
      <div className={styles.info__itemWrapper}>
        <h2 className={styles.info__item}>
          Follow us
        </h2>
        <div className={styles.info__iconWrapper} >
          <FaFacebook className={styles.info__icon} />
          <FaWhatsapp className={styles.info__icon} />
        </div>
      </div>

    </div>
  )
}
