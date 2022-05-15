import React, { useContext, useState } from 'react';
import listContext from '../contexts/listContext';
import styles from './Generator.module.css';
import Values from 'values.js';

const Generator = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const {list, setList, defaultColor} = useContext(listContext);

  const getColors = (e) => {
      e.preventDefault();
      try {
        const colors = new Values(color).all(10);
        setList(colors);
        setColor('');
      } catch(error) {
        setError(true);
        console.log(error);
      }
  }

  return (
    <>
      <section className={styles.container}>
        <h3>Color Generator</h3>
        <form onSubmit={getColors}>
          <input 
          type='text' 
          placeholder={defaultColor}
          className={error? styles.error : ''}
          onChange={e => setColor(e.target.value)}/>
          <button className={styles.btn}>Generate Colors</button>
        </form>
      </section>
      
    </>
    
  )
}

export default Generator