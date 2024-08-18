import React from 'react';
import styles from './styles.module.css';

function WarningNotice() {
  return (
    <div className={styles.noticeContainer}>
      <h1 className={styles.mainTitle}>מדיניות אפס סובלנות</h1>
      <p className={styles.noticeText}>
        כל משתמש שישתמש בשירותים שלנו כדי לפרסם חומר התעללות מינית<br />
        יוסר מידית CSAM/בילדים<br />
        בכל המערכות שלנו, למעט כאלו שהן לא בבעלות שלנו מתוקנת מערכת זיהוי<br />
        CSAM ותיעוד של תוכן מיני הכולל<br />
        בזיהוי, המערכת מסירה את המשתמש החשוד מהמערכת, מתריעה לרשויות<br />
        המוסמכות ומספקת להן את כל המידע הנדרש, אנו ננקוט בצעדים משפטיים<br />
        ופילילים מיידים במידת הצורך
      </p>
      <p className={styles.importantMessage}>
        יש לנו אפס סובלנות למשתמשים שמשתמשים בפלטפורמה שלנו<br />
        לפרסום תוכן המכיל CSAM/סחר
      </p>
    </div>
  );
}

export default WarningNotice;
