import styles from "./Map.module.css"
export default function Map() {
    return (
        <div className={styles.map} >
            <div className={styles.map__link} >
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7135.121817549633!2d87.064171!3d26.598462!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef1b001a5f52ad%3A0x6194d7420b1d264a!2sUchha%20Himal%20Product%20Pvt%20Ltd!5e0!3m2!1sen!2snp!4v1765811658234!5m2!1sen!2snp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}
