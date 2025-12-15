import styles from "./Gallery.module.css"
import Image from "next/image"
import Image1 from "../../../public/blog_gallery_1.webp"
import Image2 from "../../../public/blog_gallery_2.webp"
import Image3 from "../../../public/blog_gallery_3.webp"
import Image4 from "../../../public/blog_article_image.webp"
export default function Gallery() {
    return (
        <div className={styles.gallery} >
            <h1 className={styles.gallery__heading} >
                Blog Gallery
            </h1>
            <div className={styles.gallery__grid} >
                 {/*  this div should be relative if i have to use fill for Image tag */}
                <div className={styles.gallery__items}>
                    <Image src={Image1} alt="galleryImage1"
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }} />
                </div>

                {/* 2 */}
                <div className={styles.gallery__items}>
                    <Image src={Image2} alt="galleryImage2"
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }} />

                </div>

                {/* 3 */}
                <div className={styles.gallery__items}>
                    <Image src={Image3} alt="galleryImage3"
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }} />

                </div>

                {/* 4 */}
                <div className={styles.gallery__items}>
                    <Image src={Image4} alt="galleryImage4"
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }} />

                </div>

                {/* 5 */}
                <div className={styles.gallery__items}>
                    <Image src={Image4} alt="galleryImage4"
                        fill
                        style={{ objectFit: "cover", borderRadius: "10px" }} />

                </div>

                {/* 6 */}
                <div className={styles.gallery__items}>

                </div>
            </div>
        </div>
    )
}
