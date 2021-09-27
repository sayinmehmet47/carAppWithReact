import { useHistory, Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GeneralContext } from '../context/GeneralContext';
const CarList = ({ cars }) => {
  const { favorites, dispatch } = useContext(GeneralContext);

  const history = useHistory();
  const handleRemove = (id) => {
    fetch('http://localhost:8000/cars/' + id, {
      method: 'DELETE',
    }).then(() => {});
    history.go(0);
  };
  console.log(favorites);

  return (
    <div className="img-group">
      {cars.map((entry) => {
        return (
          <figure
            key={entry.id}
            className="img-item d-flex flex-column text-center"
          >
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
            </Link>
            <div>
              <Link to={`/cars/${entry.id}`}>
                <Button className="btn btn-info">Take Info</Button>
              </Link>
              <Button
                className="btn btn-danger"
                onClick={() => handleRemove(entry.id)}
              >
                Remove
              </Button>
              <Button
                onClick={() =>
                  dispatch({
                    type: 'ADD_FAVORITE',
                    cars: {
                      name: entry.name,
                      body: entry.body,
                      link: entry.img,
                    },
                  })
                }
                className="btn btn-success"
              >
                Add to Favorite
              </Button>
            </div>
          </figure>
        );
      })}
    </div>
  );
};

export default CarList;
