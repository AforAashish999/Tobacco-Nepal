import styles from './Hero-Section.module.css'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <div className={styles.hero}>
            <h1 className={styles.hero__title}>
                Photo Gallery
            </h1>
            <h2 className={styles.hero__subTitle}>
                Explore our visual journey through product photography, videography, farming practices, and production processes.
            </h2>

            <div className={styles.hero__linkWrapper}>
                <Link href='/products' className={styles.hero__productLink}>
                    View products
                </Link>
                <Link href='/about' className={styles.hero__learnLink}>
                    Learn More
                </Link>
            </div>
        </div>
    )
}
