'use client';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import pin from '@/assets/images/pin.svg';
import Spinner from './Spinner';
import Map, {Marker} from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: '100%',
    height: '500px',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const address = `${property.location.street},${property.location.city},${property.location.state},${property.location.zipcode}`;
        const res = await fetch(`https://api.maptiler.com/geocoding/${encodeURIComponent(
          address
        )}.json?key=${process.env.NEXT_PUBLIC_MAPTILER_GEOCODING_API_KEY}`
      );

      const data = await res.json();
      if(!data.features || data.features.length === 0){
        setError("Location not Found");
        setLoading(false);
        return;
      }
      const feature = data.features[0];
      // Reject poor matches
      if (feature.relevance < 0.65) {
        setError("Location not found");
        setLoading(false);
        return;
      }

      const [lng, lat] = feature.center;
      setLat(lat);
      setLng(lng);
      
      setViewport({
        latitude: lat,
        longitude: lng,
        zoom: 12,
        width: '100%',
        height: '500px',
      });

      setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Location not found");
        setLoading(false);
      }
    };
    fetchCoords();
  },[property]);

  if(loading) return <Spinner loading={loading}/>
  if(error) {
    return (
      <div className="h-[500px] flex items-center justify-center border rounded-lg">
        <p className="text-red-500 font-semibold">{error}</p>
      </div>
    );
  }
  return !loading &&(
    <Map
      initialViewState={viewport}
      mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_GEOCODING_API_KEY}`}
      style={{ width: '100%', height: '500px' }}
    >
      <Marker longitude={lng} latitude={lat} anchor="bottom">
        <Image
          src={pin}
          alt="Location"
          width={40}
          height={40}
        />
      </Marker>
    </Map>
);
}

export default PropertyMap