import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../fetch/useFetch';

const CarDetails = () => {
  const { id } = useParams();
  const {
    data: car,
    isPending,
    error,
  } = useFetch('http://localhost:8000/cars/' + id);
  return (
    <div className="car-details">
      {isPending && (
        <div className="loading">
          Downlading <FontAwesomeIcon className="spinner" icon={faSpinner} />
        </div>
      )}
      {error && <div>Something goes wrong!!!</div>}
      {car && (
        <div className="car-body">
            <p>{car.body}</p>
          <figure>
            <img src={car.img} alt="" />
          </figure>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
