import React, { useState } from 'react';
import styles from './styles.module.css';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h1 className={styles.mainTitle}>שאלות נפוצות</h1>
      <div className={styles.grid}>
        <div className={styles.faqItem} onClick={() => toggle(0)}>
          <div className={styles.faqQuestion}>
            האם אני יכול להעתיק תוכן מהאתר שלכם
            <span className={styles.icon}>{activeIndex === 0 ? '-' : '▼'}</span>
          </div>
          {activeIndex === 0 && (
            <div className={styles.faqAnswer}>
              אין להעתיק תוכן מילה במילה אבל אנחנו כן בעד ארגונים שלוקחים את היוזמה ורוצים לעשות פורטל מדיניות בדומה לשלנו! רוב המידע פה הוא גנרי והתקני ISO הם ציבוריים.
            </div>
          )}
        </div>

        <div className={styles.faqItem} onClick={() => toggle(1)}>
          <div className={styles.faqQuestion}>
            האם אתם ארגון ללא מטרות רווח
            <span className={styles.icon}>{activeIndex === 1 ? '-' : '▼'}</span>
          </div>
          {activeIndex === 1 && (
            <div className={styles.faqAnswer}>
              לא, אף על פי שאנחנו ארגון מתנדבים אנחנו כן עושים רווחים והם עוזרים לנו לכסות אחרי ההוצאות. אנחנו משתמשים ברווחים שלנו על מנת לגדול ולשפר את איכות השירות שלנו.
            </div>
          )}
        </div>

        <div className={styles.faqItem} onClick={() => toggle(2)}>
          <div className={styles.faqQuestion}>
            מזה תקני-ISO
            <span className={styles.icon}>{activeIndex === 2 ? '-' : '▼'}</span>
          </div>
          {activeIndex === 2 && (
            <div className={styles.faqAnswer}>
              תקני ISO הם תקנים בינלאומיים לניהול איכות. הם מגדירים את דרישות המינימום למערכת ניהול איכות, המאפשרת לארגון לספק באופן עקבי מוצר או שירות שעונה על דרישות הלקוח.
            </div>
          )}
        </div>

        <div className={styles.faqItem} onClick={() => toggle(3)}>
          <div className={styles.faqQuestion}>
            האם יש לכם תעודת iso מוכרות על ידי מכון התקנים הישראלי
            <span className={styles.icon}>{activeIndex === 3 ? '-' : '▼'}</span>
          </div>
          {activeIndex === 3 && (
            <div className={styles.faqAnswer}>
              לא, אף על פי שאנחנו מפרסמים את המדיניות שבא אנחנו מקיימים את תקני ה-ISO בארגון שלנו אף אחד מהתקנים שלנו הוא לא רשמי. אנחנו עומדים בהנחיות כי חשוב לנו הפרטיות והאבטחה שלכם ואנחנו שמים את זה בראש סדר העדיפויות שלנו.
            </div>
          )}
        </div>

        <div className={styles.faqItem} onClick={() => toggle(4)}>
          <div className={styles.faqQuestion}>
            האם אנחנו צריכים לדעת את כל המידע הזה
            <span className={styles.icon}>{activeIndex === 4 ? '-' : '▼'}</span>
          </div>
          {activeIndex === 4 && (
            <div className={styles.faqAnswer}>
              המדיניות מסבירה לכם למה אתם יכולים לצפות מתי שאתם משתמשים בשירותים שלנו. המדיניות מסבירה ומפרטת את האחריות שלנו ואת האחריות שלכם בזמן השימוש בשירותים שלנו.
            </div>
          )}
        </div>

        <div className={styles.faqItem} onClick={() => toggle(5)}>
          <div className={styles.faqQuestion}>
            צריכים יותר מידע
            <span className={styles.icon}>{activeIndex === 5 ? '-' : '▼'}</span>
          </div>
          {activeIndex === 5 && (
            <div className={styles.faqAnswer}>
              תרגישו חופשי ליצור איתנו קשר legal@ims-network.net
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
