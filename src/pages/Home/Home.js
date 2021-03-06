import useFetch from '../../fetch/useFetch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import CarList from '../../components/CarList';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const {
    error,
    isPending,
    data: cars,
  } = useFetch('https://car-app1.herokuapp.com/cars/');

  return (
    <>
      {error && <div>{error}</div>}

      {isPending && (
        <div className="loading">
          Loading <FontAwesomeIcon className="spinner" icon={faSpinner} />
        </div>
      )}

      {cars && <CarList cars={cars} />}
      <Footer />
    </>
  );
};

export default Home;
