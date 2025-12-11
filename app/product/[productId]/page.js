import styles from "./productDescription.module.css";
import Link from "next/link";
import { LuMessageCircle } from "react-icons/lu";
import { TiArrowLeft } from "react-icons/ti";
import Image from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";

export default async function page({ params }) {
    const { productId } = await params;
    const response = await fetch(`${process.env.API_URL}/products`);

    //good practice
    if (!response.ok) {
        console.error(" Aashish Error", response.status, response.statusText)
        throw new Error("Failed to fetch")
    }
    const data = await response.json();

    const filteredProduct = data.find((item) => item.id == productId);
    const similarProducts = data.filter((item) =>
        item.category === filteredProduct.category
        &&
        item.id != filteredProduct.id)

    return (
        <div className={styles.body} >

            <div className={styles.mainDiv} >
                {/* arrow */}
                <div className={styles.arrowDiv} >
                    <Link href="/product"
                        className={styles.prev} >
                        <TiArrowLeft className={styles.arrow} />
                        <p> Back to Products</p>
                    </Link>
                </div>

                {/* image and description */}
                <div className={styles.secondDiv} >

                    {/* IMAGE */}
                    <div className={styles.imageDiv} >

                        <div className={styles.firstImage} >
                            <Image src={filteredProduct.images} alt="image" width={512} height={384} className={styles.productImage} />
                        </div>

                        {/* small image div */}
                        <div className={styles.smallImageDiv} >
                            <Image src={filteredProduct.images} alt="images" height={90} width={90}
                                className={styles.smallImage} />
                        </div>

                    </div>

                    {/* DESCRIPTION */}
                    <div className={styles.descriptionDiv} >
                        <div className={styles.three} >
                            <h1 className={styles.productHeading} > {filteredProduct.name} </h1>
                            <h2 className={styles.descriptionHeading} > Description </h2>
                            <p className={styles.description} > {filteredProduct.description} </p>
                        </div>

                        <Link href="/contact" className={styles.learnBtn} >
                            <LuMessageCircle className={styles.msgIcon} />
                            <p> Learn More </p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* SIMILAR PRODUCTS */}
            <div className={styles.similarProducts} >

                <div className={styles.smHeadDiv} >
                    <div className={styles.secondHeaderDiv} >
                    <h1 className={styles.smHeading}> Similar Products </h1>
                    <div className={styles.link} >
                        <FaExternalLinkAlt className="text-xs" />

                    </div>
                    </div>
                    <Link href="/product" className={styles.smArrow} >
                        <p> View ALL </p>
                        <MdOutlineArrowRightAlt className={styles.smArrowIcon} />

                    </Link>
                </div>

                <div className={styles.similarOuterDiv} >
                    {
                        similarProducts.map((sm) => (
                            <Link href={`/product/${sm.id}`} key={sm.id}
                             className={styles.smProductDiv}  >
                                    <div className={styles.innerImgOuterDiv} >
                                <Image
                                 src={sm.images}
                                  alt="images" width={255} height={100}
                                    className={styles.innerImgDiv} />

                                    </div>

                                <div className={styles.smdesc} >
                                    <h1 className={styles.innerName} > {sm.name} </h1>
                                    <p className={styles.smDescription} > {sm.description} </p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
