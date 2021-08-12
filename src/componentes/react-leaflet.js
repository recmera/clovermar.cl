import 'leaflet/dist/leaflet.css';
import './react-leaflet.css';
import React, { Component } from "react";
import {MapContainer, TileLayer, Popup, Marker} from "react-leaflet";


const MyMarker = props => {

  const initMarker = ref => {
    if (ref) {
      ref.leafletElement.openPopup()
    }
  }

  return <Marker ref={initMarker} {...props}/>
}

const MapExample = props => {

    const {zoom, center} = props;
    return (
      <div>
        <MapContainer center={center} zoom={zoom}>
          <TileLayer
              url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <MyMarker position={center}>
            <Popup position={center}>
              London city
            </Popup>
          </MyMarker>
        </MapContainer>
      </div>
    )
}

export default MapExample;