import { useParams, useHistory } from 'react-router-dom';

const CarList = ({ cars }) => {
  const handleRemove = (id) => {
    fetch('http://localhost:8000/cars/' + id, {
      method: 'DELETE',
    }).then(() => {});
  };

  return (
    <div>
      {cars && (
        <div className="home">
          <h1>Car Gallery</h1>
          <div className="img-group">
            {cars.map((entry) => {
              return (
                <figure key={entry.id} className="img-item">
                  <img src={entry.img} width="440px" height="240" alt="" />
                  <figcaption>{entry.name}</figcaption>
                  <button>Take Info</button>
                  <button onClick={() => handleRemove(entry.id)}>Remove</button>
                </figure>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarList;
