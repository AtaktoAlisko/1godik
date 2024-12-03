import React from "react";
import { YMaps, Map, Placemark, useClient } from "@pbe/react-yandex-maps";

export default function Main() {
  useClient(); // Add this line to use the client context

  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: [45.045123, 78.420866], zoom: 16.57 }}>
          <Placemark geometry={[45.045123, 78.420866]} />
        </Map>
      </div>
    </YMaps>
  );
}
