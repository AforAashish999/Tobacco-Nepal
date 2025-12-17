import styles from './Hero-Section.module.css'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <div className={styles.hero}>
            <h1 className={styles.hero__title}>
                Video Gallery
            </h1>
            <h2 className={styles.hero__subTitle}>
                    Explore our collection of videos showcasing product highlights, behind-the-scenes
                     production, and more.            
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
