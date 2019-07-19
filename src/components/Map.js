import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { select } from "d3-selection";
import { geoEqualEarth, geoPath } from "d3-geo";

import countryShapes from "../../static/world-geojson.json";

console.log(countryShapes.features);

const pointsData = [
  //   { name: "Zurich", coords: [8.5417, 47.3769], tag: "europe2k19" },
  //   { name: "Lucerne", coords: [8.3093, 47.0502], tag: "europe2k19" },
  //   { name: "Interlaken", coords: [7.8632, 46.6863], tag: "europe2k19" },
  //   { name: "Grindelwald", coords: [8.0414, 46.6242], tag: "europe2k19" },
  //   { name: "Lauterbrunnen", coords: [7.9091, 46.5935], tag: "europe2k19" },
  //   { name: "Wroclaw", coords: [17.0385, 51.1079], tag: "europe2k19" },
  //   { name: "Porto", coords: [8.6291, 41.1579], tag: "europe2k19" },
  //   { name: "Taipei", coords: [121.5654, 25.033], tag: "taiwanexchange" },
  //   { name: "Hong Kong", coords: [114.1694, 22.3193], tag: "taiwanexchange" },
  //   { name: "Xiamen", coords: [118.0894, 24.4798], tag: "taiwanexchange" },
  { name: "Switzerland", coords: [8.2275, 46.8182], tag: "europe2k19" },
  { name: "Poland", coords: [19.1451, 51.9194], tag: "europe2k19" },
  { name: "Portugal", coords: [8.2245, 39.3999], tag: "europe2k19" },
  { name: "Taiwan", coords: [120.9605, 23.6978], tag: "taiwanexchange" },
  { name: "Hong Kong", coords: [114.1694, 22.3193], tag: "taiwanexchange" },
  { name: "Xiamen", coords: [118.0894, 24.4798], tag: "taiwanexchange" }
];

// current good size: width 1400px, top 68px, left -400px

let dimensions = {
  width: 1550,
  margins: {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  }
};

dimensions.boundedWidth =
  dimensions.width - dimensions.margins.left - dimensions.margins.right;

const sphere = { type: "Sphere" };
const projection = geoEqualEarth().fitWidth(dimensions.boundedWidth, sphere);

const geoPathGenerator = geoPath(projection);
// eslint-disable-next-line no-unused-vars
const [[x0, y0], [x1, y1]] = geoPathGenerator.bounds(sphere);

dimensions.boundedHeight = y1;
dimensions.height =
  dimensions.boundedHeight + dimensions.margins.top + dimensions.margins.bottom;

const InlineComp = styled.div`
  display: inline-block;
  //   align-items: center;
  position: relative;
  height: 100vh;
  //   border: 1px solid orange;
  z-index: -1;
`;

const Map = styled.svg`
  position: absolute;
  top: 30px;
  left: -460px;
  width: ${dimensions.width}px;
  height: ${dimensions.height}px;
  //   border: 1px solid blue;
`;

const createD3Map = wrapper => {
  const bounds = wrapper
    .append("g")
    .attr("width", dimensions.boundedWidth)
    .attr("height", dimensions.boundedHeight);

  // Draw data
  //   const earth = bounds
  //     .append("path")
  //     .attr("class", "earth")
  //     .attr("d", geoPathGenerator(sphere));

  //   const graticule = bounds
  //     .append("path")
  //     .attr("class", "graticule")
  //     .attr("d", geoPathGenerator(d3.geoGraticule10()));

  //   const countries = bounds
  //     .selectAll(".country")
  //     .data(countryShapes.features)
  //     .enter()
  //     .append("path")
  //     .attr("class", "country")
  //     .attr("d", geoPathGenerator)
  //     .attr("fill", "#e2e6e9");

  const countries = bounds
    .selectAll(".country")
    .data(countryShapes.features)
    .enter()
    .filter(d => d.properties["NAME"] !== "Antarctica")
    .append("path")
    .attr("class", "country")
    .attr("d", geoPathGenerator)
    .attr("fill", "#81b181");

  const points = bounds
    .selectAll(".point")
    .data(pointsData)
    .enter()
    .append("circle")
    .attr("class", "point")
    .attr("cx", d => projection(d.coords)[0])
    .attr("cy", d => projection(d.coords)[1])
    .attr("r", "5px")
    .attr("fill", d => {
      if (d.tag === "europe2k19") {
        return "hsl(340, 60%, 51%)";
      } else {
        return "hsl(220, 60%, 52%)";
      }
    });
};

const MapComp = () => {
  const d3MapRef = useRef();

  useEffect(() => {
    createD3Map(select(d3MapRef.current));
  }, []);

  return (
    <InlineComp>
      <Map ref={d3MapRef} />
    </InlineComp>
  );
};

export default MapComp;
