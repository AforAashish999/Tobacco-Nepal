import styles from './Second-Section.module.css'

import React from 'react'

export default function SecondSection () {
  return (
    <div className={styles.main}>
      <div className={styles.company}>
        <div className={styles.company__description}>
          <h1 className={styles.company__title}>Uccha Himal Product </h1>
          <p className={styles.company__para}>
            Welcome to{' '}
            <span className={styles['company__para--highlight']}>
              Uchha Himal Product Pvt Ltd
            </span>
            , a trusted name in Nepal's tobacco industry. Founded with a vision
            to blend tradition and innovation, we craft premium tobacco products
            that reflect excellence and authenticity.
          </p>
          <p className={styles.company__para}>
            Guided by integrity and a commitment to quality, we source the
            finest tobacco leaves and use advanced manufacturing processes to
            deliver products that meet the highest standards.
          </p>
          <p className={styles.company__para}>
            For us, tobacco craftsmanship is an art — one that connects culture,
            heritage, and innovation. As we grow, we remain committed to
            sustainability, employee well-being, and community responsibility.
          </p>
        </div>
        <div className={styles.company__imageWrapper}>
          <img
            src='/about-second-section-image.webp'
            alt='company picture'
            className={styles.company__image}
          />
        </div>
      </div>
      <p className={styles.secondSection__endText}>
        Uchha Himal Product Pvt Ltd — where quality meets craftsmanship, and
        tradition embraces innovation.
      </p>
    </div>
  )
}
