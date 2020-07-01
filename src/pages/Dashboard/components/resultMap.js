import React, { useState, useEffect } from "react";
import { Map, TileLayer, Marker, Popup, CircleMarker,Circle } from 'react-leaflet'

const ResultMap = (props) => {
  const [center, setCenter] = useState(props.center)
  const [zoom, setZoom] = useState(8)
  
  return (
    <Map center={center} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Circle center={center} radius={1000*props.radius} />
      {
        !!props.result && props.result.map((res) => {
          return <Marker position={[res.gps_lat, res.gps_long]}>
            <Popup>
              <b>{res.name}</b> <small><em>{res.storeId}</em></small><br/>
              {res.address}<br/>
              Payment Accepted: {res.payment_Method.join(", ")}
            </Popup>
          </Marker>
        })
      }      
      <CircleMarker center={center} radius={1}/>
    </Map>
  );
};

export default ResultMap;
