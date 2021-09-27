import { GeneralContext } from '../context/GeneralContext';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { dispatch, favorites } = useContext(GeneralContext);
  console.log(favorites);

  return (
    <div className="d-flex mt-5">
      {favorites &&
        favorites.map((entry) => (
          <div className="card text-center" style={{width: "18rem"}}>
          <img width="20px" height="200px" className="card-img-top" src={entry.link}></img>
          <div className="card-body">
            <p className="card-text">{entry.body}</p>
            <button className="btn btn-outline-success" onClick={()=>dispatch({type:"REMOVE_FAVORITE",cars:{id:entry.id}})}>Remove</button>

          </div>

        </div>
        ))}
    </div>
  );
};

export default Favorites;
