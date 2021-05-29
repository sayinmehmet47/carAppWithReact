import { useHistory, Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const CarList = ({ cars }) => {
  const history = useHistory();

  const handleRemove = (id) => {
    fetch('http://localhost:8000/cars/' + id, {
      method: 'DELETE',
    }).then(() => {});
    history.go(0);
  };
  return (
    <div className="img-group">
      {cars.map((entry) => {
        return (
          <figure key={entry.id} className="img-item">
            <Link to={`/cars/${entry.id}`}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={entry.img} width="440px" height="240" alt="" />
                  </div>
                  <div class="flip-card-back">
                    <h1>{entry.name}</h1>
                    <p>{entry.body}</p>
                    <p>We love that guy</p>
                  </div>
                </div>
              </div>

              <figcaption>{entry.name}</figcaption>
              <Button className="btn btn-info">Take Info</Button>
              <Button className="btn btn-danger" onClick={() => handleRemove(entry.id)}>Remove</Button>
            </Link>
          </figure>
        );
      })}
    </div>
  );
};

export default CarList;
