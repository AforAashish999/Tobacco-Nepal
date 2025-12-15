import styles from "./Second-Section.module.css"
export default function SecondSection() {
  return (
    <div
      className={styles.content}
    >
      <h1 className={styles.content__heading} >
        Main Content
      </h1>
      <h2 className={styles.content__subHeading} >
        Uchha Himal’s Unwavering Commitment to Quality – A Legacy
        of Trust and Craftsmanship
      </h2>
      <p className={styles.content__description} >In the world of tobacco manufacturing, quality isn’t just a standard — it’s a
        legacy. At <span className={`${styles.content__description} ${styles['content__description--bold']}`} >
          Uchha Himal Product Pvt. Ltd.</span>,
        we have built our reputation on a
        foundation of <span className={`${styles.content__description} ${styles['content__description--bold']}`}>
          consistency, craftsmanship, and care</span>.
        From sourcing the finest
        tobacco leaves in Nepal to maintaining strict export-grade manufacturing practices,
        our commitment to excellence defines everything we do.
      </p>
      <div className={styles.content__gradientLine}></div>

      {/* ITEM1 */}
      <h2 className={styles.content__itemTitle}>
        The Journey of Quality Begins with Selection
      </h2>
      <p className={styles.content__description} >
        Every great product starts with great ingredients. Our process begins at the source
        — with handpicked tobacco leaves carefully selected for their aroma,
        texture, and strength. This attention to raw material ensures that
        only the purest, most robust tobacco finds its way into <span className={`${styles.content__description} ${styles['content__description--bold']}`}>
          Uchha Himal’s Gutkha, Surti, Khaini, and Pan Masala</span> products.
      </p>

      {/* ITEM 2 */}
      <div className={styles.content__gradientLine}></div>
      <h2 className={styles.content__itemTitle}>
        Precision and Purity in Production
      </h2>
      <p className={styles.content__description} >
        At our <span className={`${styles.content__description} ${styles['content__description--bold']}`}>
          Sunsari-based production facility</span>,
        we blend traditional craftsmanship with modern manufacturing technology.
        Our quality assurance team monitors every stage of production — from curing and blending to packaging and storage —
        guaranteeing that each product adheres to both <span className={`${styles.content__description} ${styles['content__description--bold']}`}>
          Nepalese and international quality standards</span>.
      </p>
      <p className={`${styles.content__description} ${styles['content__description--space']}`} >
        Our facilities operate with <span className={`${styles.content__description} ${styles['content__description--bold']}`}>
          state-of-the-art filtration systems, hygienic processing units, and automated packing lines</span>, ensuring freshness and consistency in every pouch that leaves our factory.
      </p>

      {/* ITEM 3 */}
      <div className={styles.content__gradientLine}></div>
      <h2 className={styles.content__itemTitle}>
        Export-Ready Standards
      </h2>
      <p className={styles.content__description}>As a leading <span className={`${styles.content__description} ${styles['content__description--bold']}`}>
        tobacco exporter from Nepal</span>,
        Uchha Himal ensures that every batch meets the regulatory requirements
        of destination countries.</p>
      <p className={styles.content__description}>We customize packaging, labeling, and health warnings based on <span className={`${styles.content__description} ${styles['content__description--bold']}`}>
        regional compliance</span>,
        helping importers confidently distribute products that align
        with local laws and expectations.
        </p>


      {/* ITEM 4 */}
      <div className={styles.content__gradientLine}></div>
      <h2 className={styles.content__itemTitle}>
        A Culture of Responsibility</h2>
      <p className={styles.content__description}>
        We understand that quality goes beyond the product — it extends to how we operate.
      </p>
      <p className={styles.content__description}>
        Uchha Himal promotes <span className={`${styles.content__description} ${styles['content__description--bold']}`} >
          responsible manufacturing, ethical sourcing, and safe workplace practices</span>.
        Our teams undergo continuous training to uphold hygiene, safety, and environmental responsibility in every step of production.
      </p>

      {/* ITEM 5 */}
      <div className={styles.content__gradientLine}></div>
      <h2 className={styles.content__itemTitle}>
        The Promise of Uchha Himal</h2>
      <p className={styles.content__description}>
        For us, quality isn’t a checkbox — it’s a promise. Whether you’re an international distributor or along-standing trade partner, Uchha Himal
        stands for <span className={`${styles.content__description} ${styles['content__description--bold']}`}>
          reliability, excellence, and long-term trust</span>.
      </p>
      <p className={styles.content__description}>
        Every product we make reflects our deep respect for craftsmanship and our
        ongoing pursuit of perfection.</p>
      <p className={styles.content__ending} >
        Uchha Himal Product Pvt. Ltd. — where tradition meets innovation, and quality defines identity.
      </p>
    </div>
  )
}
