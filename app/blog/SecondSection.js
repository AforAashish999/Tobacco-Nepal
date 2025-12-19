import styles from "./Second-Section.module.css"
import { IoPersonCircleSharp } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image"
import PostImage from "../../public/blog_article_image.webp"

export default function SecondSection() {   
  return (
    <div className={styles.article} >
        <h1 className={styles.article__title} > Featured Articles </h1>
            <div className={styles.article__grid} >

            <div className={`${styles.article__item} ${styles['article__item--shadow']}`} >

{/* /* this should be relative this is the image div, so by making it relatvie i can use fill in Image tag */ }
                <div className={styles.article__imageWrapper} >
                    <Image src={PostImage} alt="blogImage"
                    fill
                    style={{objectFit: "cover", borderRadiusTop:"10px"}} /> 
                    <p className="text-white"> I am text</p>
                   
                </div>
                <div className={styles.article__details} >

                    <div className={styles.article__detailsPerson}>
                        <div className={styles.article__iconWrapper} >
                            <IoPersonCircleSharp className={styles.article__icon} />
                            <h3 className={styles.article__personName} > Mr. Shah</h3>
                        </div>
                        <p className={styles.article__postedDate} > October 17, 2025</p>
                    </div>

                    <p className={styles.article__itemTitle}>
                        Uchha Himal's Unwavering Commitment to Quality - A Legacy of Trust and Craftsmanship
                    </p>
                    <p  className={styles.article__userRole}>
                        Admin
                    </p>
                    <Link href="/blog/1" className={styles.article__link} >
                        Learn More
                    </Link>
                </div>
            </div>
            <div className={styles.article__item} >
                2
            </div>
            <div className={styles.article__item}>
                3
            </div>
            </div>
    </div>
  )
}
