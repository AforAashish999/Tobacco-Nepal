import styles from "./Hero-Section.module.css";

export default function HeroSection() {
  return (
    <div className={styles.hero} >
      <div className={styles.hero__overlay} >  </div>
      <div className={styles.hero__content} >
        <h1 className={styles.hero__heading} >Contact us</h1>
        <h2 className={styles.hero__subheading} >
          Have questions about our products or export services?
          Our team is here to help and ready to assist you.
        </h2>
      </div>
    </div>
  )
}
