import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import * as suppliersData from "../../src/data/data.json";

function Map() {
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 37.363922, lng: -121.929163 }}
    >
      {suppliersData.merchantLocatorServiceResponse.response.map((supplier) => (
        <Marker
          key={supplier.responseValues.visaStoreId}
          position={{
            lat: parseFloat(supplier.responseValues.locationAddressLatitude),
            lng: parseFloat(supplier.responseValues.locationAddressLongitude),
          }}
          onClick={() => {
            setSelectedSupplier(supplier);
          }}
        />
      ))}

      {selectedSupplier && (
        <InfoWindow
          position={{
            lat: parseFloat(
              selectedSupplier.responseValues.locationAddressLatitude
            ),

            lng: parseFloat(
              selectedSupplier.responseValues.locationAddressLongitude
            ),
          }}
          onCloseClick={() => {
            setSelectedSupplier(null);
          }}
        >
          <div>
            <h2>{selectedSupplier.responseValues.visaStoreName}</h2>
            <p>{selectedSupplier.responseValues.merchantStreetAddress}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

// function Locate() {
//   const [selectedPosition, setSelectedPosition] = useState(null);
//   return (
//     <button
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//           setSelectedPosition(position);
//         });
//       }}
//     >
//       <Marker
//         position={{
//           lat: selectedPosition.coords.latitude,
//           lng: selectedPosition.coords.longitude,
//         }}
//       />
//       <img src="compass.svg" alt="compass - locate me" />
//     </button>
//   );
// }
const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDDzXssJhbXaggq6R7YLrm4pfbb9yLXQkg`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
