import React from "react";
import Tile from "./TileLogic";

const Tiles = ({
  loc,
  currentTile,
  newArray,
  choice,
  broken,
  handleLeftRight,
  calculateWidthAndHeight,
  absolute
}) => {
  return (
    <div className={`tiles-container ${absolute ? 'absolute' : ''}`}>
      {newArray.map((tile, index) => (
        <Tile
          key={index}
          index={index}
          currentTile={currentTile}
          tile={tile}
          loc={loc}
          choice={choice}
          broken={broken}
          handleLeftRight={handleLeftRight}
          calculateWidthAndHeight={calculateWidthAndHeight}
        />
      ))}
    </div>
  );
};

export default Tiles;
