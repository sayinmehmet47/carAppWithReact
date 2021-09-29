import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid/dist/v1';

const Create = () => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [body, setBody] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const car = { name, img, body, id: uuid() };

    fetch('https://car-app1.herokuapp.com/cars/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    }).then(() => {
      // history.go(-1);
      history.push('/');
    });
  };

  return (
    <Form
      className="border shadow border-dark bg-dark rounded text-white mt-3 p-5"
      action="submit"
      onSubmit={handleSubmit}
      style={{ width: '20rem', margin: 'auto auto' }}
    >
      <Form.Group controlId="formBasicName">
        <Form.Label>Create your Own Car</Form.Label>
        <hr />

        <Form.Control
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter car name"
        />
      </Form.Group>
      <hr />

      <Form.Group>
        <Form.Label>Png Link</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setImg(e.target.value)}
          value={img}
          placeholder="Link"
        />
      </Form.Group>
      <hr />

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Info about the car</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          as="textarea"
          rows={3}
        />
      </Form.Group>
      <hr />
      <button className="btn btn-outline-light">Submit</button>
    </Form>
  );
};

export default Create;
