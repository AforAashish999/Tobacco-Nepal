import styles from "./Contact-Page.module.css"
import ContactForm from "./ContactForm.js"
import ContactInfo from "./ContactInfo.js"

export default function ContactPage() {
  return (
    <div className={styles.main} >
        <ContactForm />
        <ContactInfo />
    </div>
  )
}
