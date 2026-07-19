'use client';
import Map, {Marker, NavigationControl} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const PropertyMap = ({ latitude, longitude }) => {
  return (
    <Map 
        initialViewState={{
            latitude,
            longitude,
            zoom: 14,
        }}
        style={{width: "100%", height: "400px"}}
        mapStyle="https://tiles.openfreemap.org/styles/liberty"
    >
        <NavigationControl position='top-right' />
        <Marker latitude={latitude} longitude={longitude}>

        </Marker>
    </Map>
  );
}

export default PropertyMap