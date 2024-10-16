---
sidebar_position: 31  
title: A.8.31 הפרדה בין סביבות פיתוח, בדיקות וייצור
---

## מטרה  
מטרת הנוהל היא להבטיח הפרדה ברורה ומאובטחת בין סביבות הפיתוח, הבדיקות והייצור בארגון, על מנת למנוע פגיעות במערכות הייצור, להבטיח את יציבותן ולשמור על סודיות, שלמות וזמינות המידע.

## תחום יישום  
הנוהל חל על כל סביבות הפיתוח, הבדיקות והייצור בארגון, כולל תשתיות חומרה, תוכנה, רשתות, ומערכות מידע המעורבות בתהליכי פיתוח, בדיקה והפעלה של יישומים ומערכות.

## הגדרות  
- **סביבת פיתוח:** סביבה ייעודית שבה מתבצע פיתוח תוכנה, יישומים, ומערכות לפני המעבר לבדיקות ולפריסה בייצור.
- **סביבת בדיקות:** סביבה נפרדת שבה מתבצעות בדיקות אבטחה, ביצועים ותפקודיות על מערכות ויישומים שפותחו, כדי להבטיח את תקינותם לפני המעבר לייצור.
- **סביבת ייצור:** סביבה שבה מערכות ויישומים פרוסים ומשמשים את הארגון במבצעיות שוטפת, וחשופה למשתמשים חיצוניים או פנימיים.

## אחריות  
- **מחלקת הפיתוח:** אחראית על תחזוקה וניהול של סביבות הפיתוח, כולל כתיבת קוד וביצוע בדיקות ראשוניות בסביבה מבודדת מהייצור.
- **מחלקת IT:** אחראית על ניהול ותחזוקה של סביבות הבדיקות והייצור, והבטחת ההפרדה ביניהן לבין סביבת הפיתוח.
- **ממונה על אבטחת המידע:** אחראי לפקח על תהליך ההפרדה בין הסביבות, לוודא עמידה בדרישות האבטחה ולבצע הערכות סיכונים תקופתיות.
- **מנהלי פרויקטים:** אחראים לוודא שההפרדה בין הסביבות נשמרת ושאין מעבר ישיר בין סביבות הפיתוח, הבדיקות והייצור ללא תהליך מסודר.

## תהליך  
### 1. תכנון והגדרת סביבות  
- מחלקת IT תבצע תכנון של סביבות הפיתוח, הבדיקות והייצור, תוך הפרדה ברורה ביניהן מבחינת תשתיות, גישה ונתונים.
- יש להגדיר סביבת בדיקות המדמה ככל האפשר את סביבת הייצור, כדי לוודא שהתוצאות בבדיקות יהיו רלוונטיות ואמינות.

### 2. ניהול גישה  
- יש להגדיר ולהגביל את הגישה לכל אחת מהסביבות לפי הצורך, כך שרק צוותים מורשים יוכלו לגשת לסביבת הפיתוח, הבדיקות או הייצור בהתאם לתפקידם.
- יש להשתמש במנגנוני אימות חזקים, כגון אימות דו-שלבי, כדי להבטיח שהגישה לסביבות מאובטחת ומוגבלת למשתמשים מורשים בלבד.

### 3. הפרדה בין נתונים  
- יש להבטיח שהנתונים המשמשים בפיתוח ובבדיקות הם נתוני דמה (Dummy Data) שאינם כוללים מידע רגיש או נתונים אישיים המופיעים בסביבת הייצור.
- במקרה שבו נדרשת גישה לנתוני ייצור לצורך בדיקות, יש לוודא שהנתונים עוברים אנונימיזציה או הצפנה לפני השימוש בהם בסביבות אחרות.

### 4. תהליך מעבר בין סביבות  
- כל מעבר של קוד או מערכת מסביבת הפיתוח לסביבת הבדיקות, ומסביבת הבדיקות לסביבת הייצור, יתבצע בתהליך מסודר ומבוקר הכולל בדיקות אבטחה ואישורים רלוונטיים.
- יש לוודא שכל הגורמים המעורבים בתהליך המעבר מודעים למדיניות ולנהלים הנדרשים, ושכל שינוי מתועד בצורה מסודרת.

### 5. בדיקות אבטחה  
- לפני מעבר מסביבת הפיתוח לסביבת הבדיקות, ולפני פריסה בסביבת הייצור, יש לבצע בדיקות אבטחה מקיפות כדי לוודא שאין פגיעויות או בעיות אבטחה העלולות לסכן את המערכת.
- תוצאות הבדיקות יתועדו וינותחו, וכל פגיעות שתתגלה תתוקן לפני המעבר לשלב הבא.

### 6. ניטור ובקרה  
- מחלקת IT וממונה על אבטחת המידע יבצעו ניטור שוטף של כל הסביבות כדי לוודא שאין חיבורים בלתי מורשים או מעברים לא מאושרים בין הסביבות.
- כל חריגה או פעילות חריגה תיבדק ותטופל בהתאם לנהלי האבטחה של הארגון.

### 7. הדרכת צוותים  
- הארגון יספק הדרכה לצוותי הפיתוח, הבדיקות והתפעול בנוגע לחשיבות ההפרדה בין הסביבות, השימוש הנכון בסביבות והנחיות לפעולה במקרה של בעיות או חשד להפרת מדיניות.
- ההדרכה תכלול גם נהלי גישה, טיפול בנתונים, ותהליכי בדיקות ואישורים למעבר בין הסביבות.

### 8. סקירה ועדכון נהלים  
- הארגון יבצע סקירה תקופתית של נהלי ההפרדה בין סביבות הפיתוח, הבדיקות והייצור, ויעדכן אותם בהתאם לשינויים טכנולוגיים, סיכונים חדשים או דרישות רגולטוריות.
- יש לוודא שכל העדכונים מיושמים על ידי כל הצוותים הרלוונטיים בארגון.

## הערות  
הארגון יבצע ביקורות תקופתיות על יישום הנוהל בנוגע להפרדה בין סביבות פיתוח, בדיקות וייצור, ויבצע התאמות ושיפורים בהתאם לצורך ולשינויים רגולטוריים או טכנולוגיים.