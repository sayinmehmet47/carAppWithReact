import { useParams, useHistory, Link } from 'react-router-dom';
import useFetch from '../fetch/useFetch';

const CarList = ({ cars }) => {
  const history=useHistory();

  const handleRemove = (id) => {
    fetch('http://localhost:8000/cars/' + id, {
      method: 'DELETE',
    }).then(() => {});
    history.go(0)

  };
  return (
    <div className="img-group">
      {cars.map((entry) => {
        return (
          <figure key={entry.id} className="img-item">
            <Link to={`/cars/${entry.id}`}>
              <img src={entry.img} width="440px" height="240" alt="" />
              <figcaption>{entry.name}</figcaption>
              <button>Take Info</button>
              <button onClick={() => handleRemove(entry.id)}>Remove</button>
            </Link>
          </figure>
        );
      })}
    </div>
  );
};

export default CarList;
