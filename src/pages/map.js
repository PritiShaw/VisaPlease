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

  //     useEffect(() => {
  //       const listener = e => {
  //         if (e.key === "Escape") {
  //           setSelectedPark(null);
  //         }
  //       };
  //       window.addEventListener("keydown", listener);

  //       return () => {
  //         window.removeEventListener("keydown", listener);
  //       };
  //     }, []);

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 37.363922, lng: -121.929163 }}
    >
      {suppliersData.merchantLocatorServiceResponse.response.map((supplier) => (
        <Marker
          key={supplier.responseValues.visaStoreName}
          position={{
            lat: supplier.responseValues.locationAddressLatitude,
            lng: supplier.responseValues.locationAddressLongitude,
          }}
          onClick={() => {
            setSelectedSupplier(supplier);
          }}
        />
      ))}

      {selectedSupplier && (
        <InfoWindow
          position={{
            lat: selectedSupplier.responseValues.locationAddressLatitude,

            lng: selectedSupplier.responseValues.locationAddressLongitude,
          }}
          onCloseClick={() => {
            setSelectedSupplier(null);
          }}
        >
          <div>park def</div>
        </InfoWindow>
      )}
    </GoogleMap>
    //             icon={{
    //               url: `/skateboarding.svg`,
    //               scaledSize: new window.google.maps.Size(25, 25)
    //             }}
    //           />
    //         ))}

    //         {selectedPark && (
    //           <InfoWindow
    //             onCloseClick={() => {
    //               setSelectedPark(null);
    //             }}
    //             position={{
    //               lat: selectedPark.geometry.coordinates[1],
    //               lng: selectedPark.geometry.coordinates[0]
    //             }}
    //           >
    //             <div>
    //               <h2>{selectedPark.properties.NAME}</h2>
    //               <p>{selectedPark.properties.DESCRIPTIO}</p>
    //             </div>
    //           </InfoWindow>
    //         )}
    //
  );
}

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
