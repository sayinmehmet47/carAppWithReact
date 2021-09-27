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
     
  
    </>
  );
};

export default Home;
