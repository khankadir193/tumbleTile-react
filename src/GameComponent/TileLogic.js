import React from "react";

const TileLogic = ({
  index,
  currentTile,
  tile,
  loc,
  choice,
  broken,
  handleLeftRight,
  calculateWidthAndHeight
}) => {
  const { width, height } = calculateWidthAndHeight(
    index,
    currentTile,
    tile.initialWidth,
    tile.initialHeight
  );

  return (
    <div
      className={`tile ${loc === index ? "active" : ""}`}
      onClick={() => handleLeftRight(index)}
      style={{
        left: `${tile.left}%`,
        bottom: `${tile.bottom}%`,
        width: `${width}px`,
        height: `${height}px`
      }}
    >
      <img src={tile.image} alt="" />
    </div>
  );
};

export default TileLogic;
