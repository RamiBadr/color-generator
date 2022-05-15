import React, { useEffect, useState } from 'react';
import styles from './SingleColor.module.css';

const SingleColor = ({hex, weight, index, rgb}) => {
  const [copyAlert, setCopyAlert] = useState(false);
  const hexValue = `#${hex}`;
  const rgbString = `(${rgb.join()})`;

  const copyHexHandler = () => {
    setCopyAlert(true);
    navigator.clipboard.writeText(hexValue);
  }

  useEffect(() => {
      const timeout = setTimeout(() => {
        setCopyAlert(false);
      }, 3000);
      return () => clearTimeout(timeout);
  }, [copyAlert])
  return (
        <article 
        className={`${styles.color} ${index > 5? styles.lightColor : ''}`} 
        style={{backgroundColor: hexValue}}
        onClick={copyHexHandler}
        >
          <div className={styles.values}>
            <p className={styles.percentage}>{weight}%</p>
            <p className={styles.colorValue}>{hexValue}</p>
            <p className={styles.rgb}>{rgbString}</p>
          </div>
          {copyAlert && <p className={styles.copyAlert}>Copied Hex To Clipboard</p>}
        </article>
  )
}

export default SingleColor;