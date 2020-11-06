import React from 'react';
import './App.css';
import {Clusterer, Map, Placemark, PlacemarkGeometry, YMaps} from 'react-yandex-maps';

const points: PlacemarkGeometry[] = [
    [53.931574, 27.623856],
    [53.731574, 27.523856],
    [53.801574, 27.723856],
    [53.831574, 27.793856],
];

function App() {
  return (
      <YMaps>
        <Map
            className="map"
            defaultState={{ center: [53.931574, 27.623856], zoom: 10 }}
        >
            <Clusterer
                options={{
                    preset: 'islands#redClusterIcons',
                    groupByCoordinates: false,
                }}
            >
                {points.map((coordinates, index) => (
                    <Placemark
                        modules={["geoObject.addon.balloon"]}
                        key={index}
                        geometry={coordinates}
                        properties={{
                            balloonContent: 'Текст',
                        }}
                        options={{
                            hideIconOnBalloonOpen: false,
                            preset: 'islands#redGardenCircleIcon', // islands#COLOR + NAME + CircleIcon
                        }}
                    />
                ))}
            </Clusterer>
        </Map>
      </YMaps>
  );
}

export default App;
