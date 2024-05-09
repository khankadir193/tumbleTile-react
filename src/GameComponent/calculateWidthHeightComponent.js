import React from 'react';

const CalculateWidthAndHeightComponent = () => {
    console.log('seperate components has been calling...');
  // Define the calculateWidthAndHeight function
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

  // Export the calculateWidthAndHeight function
  return calculateWidthAndHeight;
};

export default CalculateWidthAndHeightComponent;
