import styles from "./Hero-Section.module.css"
export default function HeroSection() {
  return (
    <div className={styles.blog} >

      <h1 className={styles.blog__title}>
        Blog
      </h1>
      <p className={styles.blog__subTitle}>
        Experience the journey from farm to finished product through
        captivating visuals of our photography, practices,
        and production.
      </p>

    </div>
  )
}    
