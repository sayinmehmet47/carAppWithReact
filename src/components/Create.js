import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import uuid from "uuid/dist/v1"

const Create = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const car = {name,img,id:uuid()};

    fetch('http://localhost:8000/cars/',{
      method: 'POST',
      headers: { "Content-Type":"application/json" },
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
          onChange={(e) => setImg(e.target.value)}
          value={img}
        />
      </div>
      <button>Add Car</button>
    </form>
  );
};

export default Create;
