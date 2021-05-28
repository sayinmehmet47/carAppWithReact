import useFetch from '../fetch/useFetch';
import { useParams, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  const { isPending, error, data } = useFetch('http://localhost:8000/cars');


  return (
    <>
      {isPending && (
        <div className="loading">
          Loading <FontAwesomeIcon className="spinner" icon={faSpinner} />
        </div>
      )}

      {data && (
        <div className="home">
          <h1>Car Gallery</h1>
          <div className="img-group">
            {data.map((entry) => {
              return (
                <figure key={entry.order} className="img-item">
                  <img src={entry.img} width="440px" height="240" alt="" />
                  <figcaption>{entry.name}</figcaption>
                  <button>Add</button>
                  <button>Remove</button>
                </figure>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
