import React from "react";
import { tiles } from "../raw/users/rewards";
import Tiles from "./Tiles";

export default function GameLogic({
  position,
  mascot,
  handleLeftRight,
  currentTile,
  choice,
  broken,
  click,
  gear,
  loc
}) {
  const calculateWidthAndHeight = (index, ct, initialWidth, initialHeight) => {
    // Calculate the distance from the current tile to the object
    let distanceToCurrentTile = Math.abs(index - ct + 0.8);
    if (distanceToCurrentTile > 25 / 2) {
      distanceToCurrentTile = 25 - distanceToCurrentTile;
    }
    // Calculate the scale factor based on the distances
    const scaleFactor = 1 - 0.1 * Math.min(distanceToCurrentTile, 7.5);

    // Calculate the width and height for the object based on the scale factor
    const width = initialWidth * scaleFactor;
    const height = initialHeight * scaleFactor;

    if (ct === index) {
      return { width: 58, height: 22 };
    } else {
      return { width, height, finwidth: width, finheight: height };
    }
  };

  const startIndex = currentTile === 0 ? 0 : currentTile - 1;
  const newArray = Array.from(
    { length: 8 },
    (_, i) => tiles[(startIndex + i) % 25]
  );

  return (
    <div className="maingame" id="mainboard">
      <Tiles
        loc={loc}
        currentTile={currentTile}
        newArray={newArray}
        choice={choice}
        broken={broken}
        handleLeftRight={handleLeftRight}
        calculateWidthAndHeight={calculateWidthAndHeight}
      />
      <Tiles
        absolute
        currentTile={currentTile}
        newArray={newArray}
        choice={choice}
        broken={broken}
        handleLeftRight={handleLeftRight}
        calculateWidthAndHeight={calculateWidthAndHeight}
      />
      <img
        style={{
          left: `${position.left}vw`,
          bottom: `${position.bottom}vw`,
          transition: click
            ? `all ${
                gear === "manual" ? 0.4 : 0.2
              }s cubic-bezier(0, 0.3, 1, 0.7)`
            : "none"
        }}
        id="mascot"
        className={broken ? "mascot fall" : "mascot "}
        src={mascot}
        alt=""
      />
    </div>
  );
}
