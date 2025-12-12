import styles from "./Third-Section.module.css";
import { FiAward } from "react-icons/fi";
import { LuLightbulb } from "react-icons/lu";
import { LuLeaf } from "react-icons/lu";

export default function ThirdSection() {
  return (
    <div className={styles.main} >
        <h1 className={styles.main__title} > Our Core Principles </h1>
        <div className={styles.grid} >
            
            <div className={styles.grid__quality } >
                <div className={styles.iconWrapper} >
                <FiAward  className={styles.qualityIcon} />

                </div>
            <h1 className={styles.grid__title}  > Quality Assurance </h1>
            <p className={styles['grid__quality--description'] } > We ensure top quality in every tobacco product, earning customer trust and satisfaction.</p>
            </div>


                {/* 2 */}
            <div className={styles.grid__innovation }>
                <div className={styles.iconWrapper}>
                <LuLightbulb className={styles.qualityIcon}/>
                </div>
                <h1 className={styles.grid__title} > Innovation and Technology</h1>
                <p className={styles['grid__innovation--description'] }>We use advanced manufacturing technologies to improve quality and efficiency.</p>
            </div>


            {/* 3 */}
            <div className={styles.grid__sustainable }>
                <div className={styles.iconWrapper}>
            <LuLeaf className={styles.qualityIcon} />
                </div>
            <h1 className={styles.grid__title} > Sustainable Development </h1>
            <p className={styles['grid__sustainable--description'] }>We promote responsible growth by reducing environmental impact and building a greener future.</p>
            </div>

        </div>

    </div>
  )
}


// transform transition-all ease-in-out duration-200 hover:scale-75 