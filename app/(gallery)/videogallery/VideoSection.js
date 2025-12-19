import styles from "./Video-Section.module.css";

export default function VideoSection() {
    return (
        <div className={styles.video} >
            <div className={styles.video__item} >
                <div className={styles.video__video} >
                    <video src="https://res.cloudinary.com/dcds6y8vf/video/upload/v1753163547/VideoGallery/u22lb56hmgfi5ezq1pl3.mp4"
                        controls
                        className={styles.video__content} />
                </div>
                <div className={styles.video__description} >
                    <h1 className={styles.video__heading} > 
                        Tobacco Leaves
                    </h1>
                    <h2 className={styles.video__subHeading} >
                        Carefully Cultivated Leaves to later Provide surreal Experience.
                    </h2>
                </div>

            </div >

            {/* <div className={styles.video__item}> </div>
        <div className={styles.video__item}> </div> */}

        </div>
    )
}
