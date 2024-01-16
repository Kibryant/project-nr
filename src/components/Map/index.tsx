'use client'

import { useState } from 'react'
import Map, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    longitude: -40.8448985,
    latitude: -14.8915097,
    zoom: 14,
  })

  const markerCoordinates = {
    longitude: -40.8448985,
    latitude: -14.8915097,
  }

  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
      style={{ width: 400, height: 400, borderRadius: '8px' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker
        longitude={markerCoordinates.longitude}
        latitude={markerCoordinates.latitude}
      >
        <Popup
          closeButton={false}
          closeOnClick={false}
          latitude={markerCoordinates.latitude}
          longitude={markerCoordinates.longitude}
        >
          <div className="flex flex-col gap-y-2">
            <h2 className="text-lg text-primary font-bold">
              NR Representações
            </h2>
            <p className="text-sm dark:text-black">
              Edíficio MultiPlace sala 605, Av. Juracy Magalhães 3340, Boa
              Vista, Vitória da Conquista - BA.
            </p>
          </div>
        </Popup>
      </Marker>
    </Map>
  )
}

export { MapComponent }
