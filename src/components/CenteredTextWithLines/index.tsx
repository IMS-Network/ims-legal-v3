import React from 'react';
import styles from './styles.module.css';

function CenteredTextWithLines() {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <h2 className={styles.text}>עושים הכל בדגש על פרטיות ואבטחה</h2>
      <div className={styles.line}></div>
    </div>
  );
}

export default CenteredTextWithLines;
