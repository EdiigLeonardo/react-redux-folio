import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 1600
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="rgba(44, 6, 93, 0.5)"
        stroke="rgb(121, 181, 186)"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-9, 39.5]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "rgb(121, 181, 186)",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="rgb(121, 181, 186)">
          {"Me"}
        </text>
      </Annotation>
      <Annotation
        subject={[-7.8, 40.8]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "rgb(121, 181, 186)",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="rgb(121, 181, 186)">
          {"Portugal"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;