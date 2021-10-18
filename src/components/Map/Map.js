import React from 'react';
import ReactMapboxGl, {
  Layer,
  Feature,
  Marker,
  ZoomControl,
  ScaleControl,
} from 'react-mapbox-gl';
import { GoLocation } from 'react-icons/go';

import 'mapbox-gl/dist/mapbox-gl.css';
require('dotenv').config();

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic2F5aW5tZWhtZXQ0NyIsImEiOiJja3ByZWN3d2YzM3A4MnBvODhmcm95N3UxIn0.V3Jz4WGICqwetae4kgj-8g',
});

export default function MapComponent() {
  const defaultProps = {
    center: {
      lat: 38.009969165172954,
      lng: 23.751642484341723,
    },
    zoom: 8,
  };
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          height: '60vh',
          width: '60vw',
        }}
        center={defaultProps.center}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[38.009969165172954, 23.751642484341723]} />
        </Layer>
        <Marker
          coordinates={[23.751642484341723, 38.009969165172954]}
          anchor="bottom"
        >
          <GoLocation size="40px" />
        </Marker>
        <ZoomControl position="bottom-right" />
      </Map>
    </div>
  );
}
