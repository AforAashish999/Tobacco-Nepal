import styles from "./Hero-Section.module.css"

export default function StoryHeroSection() {
  return (
    <div className={styles.hero} >
        <div className={styles.hero__overlay} > </div>
      <div className={styles.hero__content } >
          <h1 className={styles.hero__title} > Our Story </h1>
          <p className={styles.hero__subtitle} >
             Crafting premium tobacco experiences for over a century, rooted
              in tradition and excellence.</p>
        </div>
    </div>
  )
}
    