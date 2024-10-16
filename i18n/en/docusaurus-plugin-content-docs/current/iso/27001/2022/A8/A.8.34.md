---
sidebar_position: 34  
title: A.8.34 הגנה על מערכות מידע במהלך בדיקות
---

## מטרה  
מטרת הנוהל היא להבטיח שמערכות המידע של הארגון מוגנות במהלך תהליכי הבדיקות, כדי למנוע פגיעות, להבטיח את שלמות וזמינות המערכות, ולשמור על סודיות המידע בזמן הבדיקות.

## תחום יישום  
הנוהל חל על כל הבדיקות המבוצעות במערכות מידע של הארגון, כולל בדיקות תוכנה, בדיקות תפקודיות, בדיקות אבטחה ובדיקות ביצועים, בכל שלבי מחזור החיים של הפיתוח והתחזוקה.

## הגדרות  
- **מערכות מידע:** כל מערכת מחשוב או תשתית טכנולוגית בארגון הכוללת תוכנה, חומרה, מסדי נתונים, רשתות ותשתיות ענן, המשמשות לניהול ותפעול מידע.
- **בדיקות:** תהליך של בדיקת תקינות, תפקודיות, אבטחה וביצועים של מערכות מידע, המתבצע על מנת לוודא את עמידותן ותקינותן לפני או אחרי פריסה בסביבת הייצור.

## אחריות  
- **מחלקת הפיתוח:** אחראית על ניהול וביצוע הבדיקות, כולל שמירה על אבטחת מערכות המידע במהלך הבדיקות.
- **מחלקת IT:** אחראית על הגנה על תשתיות המידע במהלך הבדיקות, כולל אבטחת הרשתות, השרתים ומסדי הנתונים המשמשים בבדיקות.
- **ממונה על אבטחת המידע:** אחראי לפקח על תהליך הבדיקות, לוודא שמערכות המידע מוגנות כראוי במהלך הבדיקות, ולבצע הערכות סיכונים.
- **מנהלי פרויקטים:** אחראים לוודא שתהליך הבדיקות מבוצע בהתאם לנהלי האבטחה של הארגון, ושכל המערכות המעורבות מוגנות מפני סיכונים פוטנציאליים.

## תהליך  
### 1. תכנון בדיקות מאובטח  
- לפני תחילת הבדיקות, יש להכין תוכנית בדיקות הכוללת את אמצעי האבטחה שיינקטו כדי להגן על מערכות המידע במהלך הבדיקות.
- יש לוודא שכל רכיבי המערכת המשמשים בבדיקות מוגנים מפני גישה לא מורשית, ושכל המידע הרגיש מוגן על ידי אמצעים כגון הצפנה ואנונימיזציה.

### 2. הפרדה בין סביבות  
- יש להבטיח שהבדיקות מתבצעות בסביבה מבודדת מהסביבה הייצורית, כדי למנוע פגיעה במערכות הייצור או חשיפה של מידע רגיש.
- כל סביבה שתשמש לבדיקה תוגדר באופן נפרד, ותגביל את הגישה למשתמשים מורשים בלבד.

### 3. הגנה על נתוני ייצור  
- אם נדרש שימוש בנתוני ייצור לצורך הבדיקות, יש להבטיח שהנתונים מוגנים כראוי באמצעות מנגנוני הצפנה ואנונימיזציה, וכי גישה לנתונים מוגבלת למשתמשים מורשים בלבד.
- נתוני ייצור ישמשו רק כאשר אין אפשרות להשתמש בנתוני דמה, ובכל מקרה של שימוש בנתונים אלה יש לתעד ולבקר את הגישה.

### 4. ניטור ובקרה  
- במהלך הבדיקות, מחלקת IT וממונה על אבטחת המידע יבצעו ניטור שוטף של המערכות, הרשתות והנתונים המעורבים כדי לזהות ניסיונות גישה לא מורשית או פעילות חריגה.
- כל חריגה או פעילות לא תקינה תיבדק ותטופל באופן מיידי, והמערכת תחזור לפעולה תקינה תוך מינימום פגיעה.

### 5. בדיקות אבטחה  
- יש לבצע בדיקות אבטחה מקיפות לפני תחילת הבדיקות כדי לוודא שהמערכת מוגנת כראוי מפני פגיעות או איומי אבטחה במהלך הבדיקות.
- תוצאות הבדיקות יתועדו וכל פגיעות שתתגלה תתוקן לפני המעבר לשלב הבא.

### 6. תיעוד ודיווח  
- כל שלבי הבדיקות יתועדו, כולל האמצעים שננקטו להגנה על המערכות, תוצאות הבדיקות, ופעולות שננקטו לטיפול בבעיות אבטחה שהתגלו.
- דו"חות על תהליך הבדיקות יועברו למנהלי הפרויקטים ולממונה על אבטחת המידע לצורך מעקב ובקרה.

### 7. סקירת תהליך הבדיקות  
- לאחר סיום הבדיקות, יש לבצע סקירה של תהליך הגנת מערכות המידע כדי לוודא שכל האמצעים שננקטו היו יעילים ושלא היו פגיעות או חשיפות במהלך הבדיקות.
- כל בעיה או חריגה שזוהתה תתועד ותטופל בהתאם לנהלי האבטחה של הארגון.

### 8. הדרכת צוותים  
- הארגון יספק הדרכה לצוותי הפיתוח והבדיקות בנוגע לשיטות ולהגנות הנדרשות לשמירה על מערכות המידע במהלך הבדיקות.
- ההדרכה תכלול גם הכרות עם כלים וטכניקות לאבטחת מערכות מידע, כגון ניהול גישה, הצפנה ובדיקות אבטחה.

### 9. סקירה ועדכון נהלים  
- הארגון יבצע סקירה תקופתית של נהלי הגנת מערכות המידע במהלך בדיקות, ויעדכן אותם בהתאם לשינויים טכנולוגיים, סיכונים חדשים או דרישות רגולטוריות.
- יש לוודא שכל העדכונים מיושמים על ידי כל הצוותים הרלוונטיים בארגון.

## הערות  
הארגון יבצע ביקורות תקופתיות על יישום הנוהל בנוגע להגנה על מערכות מידע במהלך בדיקות, ויבצע התאמות ושיפורים בהתאם לצורך ולשינויים רגולטוריים או טכנולוגיים.