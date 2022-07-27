import React from 'react'
import GoogleMapReact from 'google-map-react'
import { BsPinFill } from 'react-icons/bs'


import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
  <BsPinFill size='30'className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const GoogleMaps = ({ location, zoomLevel }) => (
  <div className="map">

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default GoogleMaps;