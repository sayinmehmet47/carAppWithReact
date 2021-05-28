import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const car = {name,link};

    fetch('http://localhost:8000/cars',{
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(car)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (

    <form action="submit" onSubmit={handleSubmit}>
      <div className="name-group">
        <label>Name of Car</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
      </div>

      <div className="link-group">
        <label>Car picture link</label>
        <input
          type="text"
          onChange={(e) => setLink(e.target.value)}
          value={link}
        />
      </div>
      <button>Add Car</button>
    </form>
  );
};

export default Create;
