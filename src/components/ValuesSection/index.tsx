import React from 'react';
import styles from './styles.module.css';

function ValuesSection() {
  return (
    <section className={styles.section}>
      <h1 className={styles.mainTitle}>הערכים שלנו</h1>
      <p className={styles.subtitle}>המטרות האלה מלוות אותנו בכתיבת המדיניות באתר הזה</p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <i className={`fas fa-search ${styles.icon}`}></i>
          <h2 className={styles.cardTitle}>שקיפות</h2>
          <p className={styles.cardText}>
            חשוב לנו להירת אמינים ובכנים<br />
            שקיפות מראה בכך שאתם יודעים על<br />
            התהליכים הפנימיים שלנו, אנחנו לא מנסים<br />
            להסתיר מידע<br />
            אנחנו משתדלים להיות כנים וברורים<br />
            ומסבירים על הכל
          </p>
        </div>
        <div className={styles.card}>
          <i className={`fas fa-shield-alt ${styles.icon}`}></i>
          <h2 className={styles.cardTitle}>אבטחה</h2>
          <p className={styles.cardText}>
            המידע שלכם צריך להישאר במקום<br />
            הם נושא האבטחה הוא משהו חשוב והוא<br />
            מגיע על אותו כף יד של הפרטיות<br />
            לשמור על אבטחת הנתונים של הלקוחות<br />
            שלנו<br />
            אנו עושים מעל ומעבר בשביל לאבטח את<br />
            השירות שלנו
          </p>
        </div>
        <div className={styles.card}>
          <i className={`fas fa-fingerprint ${styles.icon}`}></i>
          <h2 className={styles.cardTitle}>פרטיות</h2>
          <p className={styles.cardText}>
            אנחנו מדריכים ובנינו את המערכת שלנו<br />
            עם דגש גבוה על פרטיות<br />
            משתדלים לעשות את המירב בשביל<br />
            לעמוד בסטנדרט הפרטיות הכי גבוהים שיש<br />
            כרים, פרטיות היא ערך חשוב בעולם המודרני
          </p>
        </div>
      </div>
    </section>
  );
}

export default ValuesSection;
