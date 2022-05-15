import React, { useState } from 'react';
import Values from 'values.js';
import listContext from './listContext';

const ListContextProvider = ({children}) => {
  const defaultColor = '#ff7777'
  const [list, setList] = useState(new Values(defaultColor).all(10));
  return (
    <listContext.Provider value={{list, setList, defaultColor}}>
        {children}
    </listContext.Provider>
  )
}

export default ListContextProvider