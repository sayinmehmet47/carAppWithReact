import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';
import MapComponent from '../../components/Map/Map';

const Contact = () => {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MapComponent />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
