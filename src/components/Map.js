import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { select, event } from "d3-selection";
import { geoEqualEarth, geoPath } from "d3-geo";

import Tooltip from "../components/Tooltip";
import countryShapes from "../../static/world-geojson.json";

const setTooltipPosition = cursorCoords => {
  let result = "to-left";
  if (cursorCoords[0] < window.innerWidth / 2) {
    result = "to-right";
  }
  if (
    document.querySelector("#tooltip").offsetHeight / 2 >
    cursorCoords[1] - 10
  ) {
    result = "to-bottom";
  } else if (
    cursorCoords[1] + document.querySelector("#tooltip").offsetHeight >
    window.innerHeight - 10
  ) {
    result = "to-top";
  }

  return result;
};

const pointsData = [
  {
    name: "Switzerland",
    coords: [8.2275, 46.8182],
    tag: "europe2k19",
    places: [
      "Zurich",
      "Lucerne",
      "Interlaken",
      "Grindelwald",
      "Lauterbrunnen",
      "Appenzell"
    ]
  },
  {
    name: "Poland",
    coords: [19.1451, 51.9194],
    tag: "europe2k19",
    places: ["Wroclaw"]
  },
  {
    name: "Portugal",
    coords: [8.2245, 39.3999],
    tag: "europe2k19",
    places: ["Porto"]
  },
  {
    name: "Taiwan",
    coords: [120.9605, 23.6978],
    tag: "taiwanexchange",
    places: ["Taipei", "Hsinchu", "Kaoshiung"]
  },
  {
    name: "Hong Kong",
    coords: [114.1694, 22.3193],
    tag: "taiwanexchange",
    places: ["Hong Kong"]
  },
  {
    name: "East China",
    coords: [118.0894, 24.4798],
    tag: "taiwanexchange",
    places: ["Xiamen", "Fuzhou"]
  },
  {
    name: "Japan",
    coords: [139.6503, 35.6762],
    tag: "taiwanexchange",
    places: ["Tokyo", "Kyoto", "Osaka", "Hokkaido"]
  },
  {
    name: "Falkland Islands",
    coords: [-59.5236, -51.7963],
    tag: "taiwanexchange",
    places: [
      "Example1",
      "Example2",
      "Example3",
      "Example4",
      "Example5",
      "Example6"
    ]
  },
  {
    name: "North Russia",
    coords: [88.1893, 69.3558],
    tag: "taiwanexchange",
    places: [
      "Example1",
      "Example2",
      "Example3",
      "Example4",
      "Example5",
      "Example6",
      "Example7",
      "Example8",
      "Example9"
    ]
  },
  {
    name: "Tasmania",
    coords: [146.315918, -41.640079],
    tag: "taiwanexchange",
    places: [
      "Example1",
      "Example2",
      "Example3",
      "Example4",
      "Example5",
      "Example6",
      "Example7",
      "Example8",
      "Example9"
    ]
  },
  {
    name: "Greenland",
    coords: [-51.1, 69.21667],
    tag: "taiwanexchange",
    places: [
      "Example1",
      "Example2",
      "Example3",
      "Example4",
      "Example5",
      "Example6",
      "Example7",
      "Example8",
      "Example9"
    ]
  },
  {
    name: "New York",
    coords: [-73.935242, 40.73061],
    tag: "taiwanexchange",
    places: [
      "Example1",
      "Example2",
      "Example3",
      "Example4",
      "Example5",
      "Example6",
      "Example7",
      "Example8",
      "Example9"
    ]
  }
];

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
  //   z-index: -1;
`;

const Map = styled.svg`
  position: absolute;
  top: 30px;
  left: -460px;
  width: ${dimensions.width}px;
  height: ${dimensions.height}px;
  //   border: 1px solid blue;
`;

const createD3Map = (wrapper, setTooltipDetails) => {
  const bounds = wrapper
    .append("g")
    .attr("width", dimensions.boundedWidth)
    .attr("height", dimensions.boundedHeight);

  // countries
  bounds
    .selectAll(".country")
    .data(countryShapes.features)
    .enter()
    .filter(d => d.properties["NAME"] !== "Antarctica")
    .append("path")
    .attr("class", "country")
    .attr("d", geoPathGenerator)
    .attr("fill", "var(--color-primary-light)")
    .attr("stroke", "var(--color-temporary)")
    .attr("stroke-width", 3);

  // points
  bounds
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
    })
    .style("cursor", "pointer")
    .on("mouseenter", function(d) {
      select(this).attr("r", "7px");
      setTooltipDetails({
        position: "to-right",
        tag: d.tag,
        name: d.name,
        places: d.places.join(", ")
      });

      const tooltipPosition = setTooltipPosition([
        event.clientX,
        event.clientY
      ]);
      setTooltipDetails({
        position: tooltipPosition,
        tag: d.tag,
        name: d.name,
        places: d.places.join(", ")
      });

      switch (tooltipPosition) {
        case "to-left":
          select("#tooltip")
            .style(
              "left",
              `${event.clientX -
                430 -
                document.querySelector("#tooltip").offsetWidth -
                65}px`
            )
            .style(
              "top",
              `${event.clientY -
                document.querySelector("#tooltip").offsetHeight / 2}px`
            );
          break;
        case "to-bottom":
          select("#tooltip")
            .style(
              "left",
              `${event.clientX -
                430 -
                document.querySelector("#tooltip").offsetWidth / 2 -
                30}px`
            )
            .style("top", `${event.clientY + 30}px`);
          break;
        case "to-top":
          select("#tooltip")
            .style(
              "left",
              `${event.clientX -
                430 -
                document.querySelector("#tooltip").offsetWidth / 2 -
                30}px`
            )
            .style(
              "top",
              `${event.clientY -
                document.querySelector("#tooltip").offsetHeight -
                30}px`
            );
          break;
        default:
          select("#tooltip")
            .style("left", `${event.clientX - 430}px`)
            .style(
              "top",
              `${event.clientY -
                document.querySelector("#tooltip").offsetHeight / 2}px`
            );
          break;
      }
    })
    .on("mouseleave", function() {
      select(this).attr("r", "5px");
      setTooltipDetails(null);
    });
};

const MapComp = () => {
  const [tooltipDetails, setTooltipDetails] = useState(null);
  const d3MapRef = useRef();

  useEffect(() => {
    createD3Map(select(d3MapRef.current), setTooltipDetails);
  }, []);

  return (
    <InlineComp>
      <Map ref={d3MapRef} />
      {tooltipDetails ? (
        <Tooltip
          position={tooltipDetails.position}
          tag={tooltipDetails.tag}
          name={tooltipDetails.name}
          places={tooltipDetails.places}
        />
      ) : null}
    </InlineComp>
  );
};

export default MapComp;
