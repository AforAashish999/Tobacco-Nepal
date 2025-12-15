import styles from './Hero-Section.module.css'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { IoPersonCircleSharp } from 'react-icons/io5'

export default function HeroSection () {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__overlay}> </div>

      <div className={styles.hero__content}>
        <Link href='/blog' className={styles.hero__blogBtn}>
          <FiArrowLeft className={styles.hero__backIcon} />
          <p className={styles.hero__prevText}> Back To Blog </p>  
        </Link>

        <h1 className={styles.hero__title}>
          Uchha Himal's Unwavering Commitment to Qualify - A Legacy of Trust and
          Craftmanship
        </h1>
        <p className={styles.hero__admin}> Admin </p>

        <div className={styles.hero__personDetails}>
          <div className={styles.hero__iconWrapper}>
            <IoPersonCircleSharp className={styles.hero__profileIcon} />
            <h3 className={styles.hero__admin2}> Admin</h3>
          </div>
          <p className={styles.hero__methods}> Sustainable Methods </p>
          <p className={styles.hero__postedDate}> October 17, 2025</p>
        </div>
      </div>
    </div>
  )
}
