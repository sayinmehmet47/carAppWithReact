import { GeneralContext } from '../context/GeneralContext';
import React, { useContext } from 'react';

const Favorites = () => {
  const { dispatch } = useContext(GeneralContext);



  return (
    <div>
      <button onClick={()=> dispatch({ type: 'ADD_FAVORITE', cars: { name: 'wosvo', id: '3' } })}>Click</button>
      <button
        onClick={()=>dispatch({ type: 'REMOVE_FAVORITE', cars: { id: '3' } })}
      >
        Remove
      </button>
    </div>
  );
};

export default Favorites;
