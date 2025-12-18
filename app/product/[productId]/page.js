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

                <div className='grid grid-cols-4  gap-12 w-full mb-16 ' >
                    {
                        similarProducts.map((item) => (
                            <Link href={`/product/${item.id}`} key={item.id}
                                className='rounded-xl overflow-hidden '>
                                {/* IMAGE Wrapper */}
                                <div className=' h-[255.1px] flex flex-col justify-evenly bg-[#111111] ' >
                                    <div className="h-2/3 bg-blue-500 relative " >
                                        <Image src={item.images}
                                            alt="images"
                                            fill
                                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        />
                                    </div>
                                </div>
                                {/* DESCRIPTION */}
                                <div className="p-4 bg-[#1A1A1A] " >
                                    <h1 className='text-lg text-[#EAB308] text-center mb-2 font-bold '> {item.name} </h1>
                                    <h2 className='text-[#d2863c] text-sm line-clamp-2 text-center ' > {item.description} </h2>
                                </div>
                            </Link>))
                    }
                </div>
            </div>
        </div>
    )
}
