import React, { useContext } from 'react';
import styles from './Colors.module.css';
import listContext from '../contexts/listContext';
import SingleColor from './SingleColor';

const Colors = () => {
  const {list} = useContext(listContext);
  return (
    <section className={styles.colors}>
        {list.map((color, index) => <SingleColor key={index} hex={color.hex} weight={color.weight} rgb={color.rgb} index={index} />)}
    </section> 
  )
}

export default Colors