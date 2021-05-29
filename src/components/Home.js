import useFetch from '../fetch/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import CarList from './CarList';

const Home = () => {

  const {
    error,
    isPending,
    data: cars,
  } = useFetch('http://localhost:8000/cars');


  return (
    <>
      {error && <div>{error}</div>}

      {isPending && (
        <div className="loading">
          Loading <FontAwesomeIcon className="spinner" icon={faSpinner} />
        </div>
      )}

     
     {cars&&<CarList cars={cars}/>}
     
     
     
     
     
     
      {/* {cars && (
        <div className="home">
          <h1>Car Gallery</h1>
          <div className="img-group">
            {cars.map((entry) => {
              return (
                <figure key={entry.id} className="img-item">
                  <img src={entry.img} width="440px" height="240" alt="" />
                  <figcaption>{entry.name}</figcaption>
                  <button>Take Info</button>
                  <button onClick={()=>handleRemove(entry.id)}>Remove</button>
                </figure>
              );
            })}
          </div>
        </div>
      )} */}
    </>
  );
};

export default Home;