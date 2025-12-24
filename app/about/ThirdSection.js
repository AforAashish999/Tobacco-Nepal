import styles from "./Third-Section.module.css";
import { FiAward } from "react-icons/fi";
import { LuLightbulb } from "react-icons/lu";
import { LuLeaf } from "react-icons/lu";

export default function ThirdSection() {
    return (
        <div className={styles.principles} >
            <h1 className={styles.principles__title} > Our Core Principles </h1>
            <div className={styles.principles__grid} >
                
                <div className={styles.principles__item} >
                    <div className={styles.principles__iconWrapper} >
                        <FiAward className={styles.principles__icon} />
                    </div>
                    <h1 className={styles.principles__itemTitle}  > Quality Assurance </h1>
                    <p className={styles.principles__description} > We ensure top quality in every tobacco product, earning customer trust and satisfaction.</p>
                </div>

                {/* 2 */}
                <div className={styles.principles__item}>
                    <div className={styles.principles__iconWrapper}>
                        <LuLightbulb className={styles.principles__icon} />
                    </div>
                    <h1 className={styles.principles__itemTitle} > Innovation and Technology</h1>
                    <p className={styles.principles__description}>We use advanced manufacturing technologies to improve quality and efficiency.</p>
                </div>

                {/* 3 */}
                <div className={styles.principles__item}> 
                    <div className={styles.principles__iconWrapper}>
                        <LuLeaf className={styles.principles__icon} />
                    </div>
                    <h1 className={styles.principles__itemTitle} > Sustainable Development </h1>
                    <p className={`${styles.principles__description} ${styles['principles__description--wide']}`}>
                        We promote responsible growth by reducing environmental impact and
                        building a greener future.</p>
                </div>

            </div>
        </div>
    )
}

