import styles from "./Contact-Form.module.css"
import { LuAsterisk } from "react-icons/lu";
  
export default function ContactForm() {
    return (
        <div className={styles.contact}>
            <div className={styles.contact__headingWrapper} >
                <h1 className={styles.contact__heading} > Send us a message</h1>
                <h2 className={styles.contact__subHeading}> Fill out the form below and our team will get back to you within 24 hours.</h2>
            </div>
            <form className={styles.contact__form} >

                <div className={styles.contact__wrapper} >
                    <label htmlFor="name" className={styles.contact__label} >
                        <p> Full Name </p>
                        <LuAsterisk className={styles.contact__asterisk} />
                    </label>
                    <input id="name" placeholder="Enter your full name" className={styles.contact__field} />
                </div>
                <div className={styles.contact__wrapper} >
                    <label htmlFor="email" className={styles.contact__label} >
                        <p> Email </p>
                        <LuAsterisk className={styles.contact__asterisk} />
                    </label>
                    <input id="email" placeholder="Enter your email" className={styles.contact__field} />
                </div>
                <div className={styles.contact__wrapper} >
                    <label htmlFor="subject" className={styles.contact__label} >
                        <p> Subject </p>
                        <LuAsterisk className={styles.contact__asterisk} />
                    </label>
                    <input id="subject" placeholder="Subject" className={styles.contact__field} />
                </div>
                <div className={styles.contact__wrapper} >
                    <label htmlFor="message" className={styles.contact__label} >
                        <p> Message </p>
                        <LuAsterisk className={styles.contact__asterisk} />
                    </label>
                    <textarea placeholder="Write your message" className={styles.contact__textarea} />
                </div>
                <label className={styles.contact__checkBox} >
                    <input type="checkbox" />
                    <p>I confirm that I am an authorised person/company to purchase tobacco products in my country.</p>
                </label>
                <button onClick={() => alert("Feature not included")} className={styles.contact__button}>
                    Inquire Now
                </button>
            </form>

        </div>




    )
}
