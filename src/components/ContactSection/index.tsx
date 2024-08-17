import React from 'react';
import styles from './styles.module.css';

function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <h1 className={styles.mainTitle}>נפגעתם? צרו קשר</h1>
      <p className={styles.subtitle}>
        אם פגעו בפרטיות שלכם באחד מהשירותים שלנו שלחו לנו מייל ואנחנו נחזור בהקדם האפשרי
      </p>
      <button className={styles.contactButton}>
        שלחו מייל לאגף הפרטיות שלנו
      </button>
    </section>
  );
}

export default ContactSection;
