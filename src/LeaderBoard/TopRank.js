import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import gemIcon from "../../assests/gem.png";
import beanIcon from "../../assests/bean.png";
import { captureImageError, goTo } from "../UtilityFunction/helper.js";

export default function TopRank({
  rank,
  userId,
  frame,
  avatar,
  name,
  level,
  score,
  talent,
  estReward,
}) {
  const { changeDetailPopUp } = useContext(UserContext);
  return (
    <div className={`rank rank-${rank}`}>
      {userId > 0 && (
        <div className="rank-frame">
          <img className="rank-frame-image" src={frame} />
          <img
            className="rank-frame-avatar"
            onErrorCapture={captureImageError}
            src={avatar}
          />
          <a
            className="rank-frame-link"
            onClick={() => goTo(0, userId, userId)}
          ></a>
        </div>
      )}
      {userId > 0 && (
        <div className="rank-detail">
          <span className="rank-detail-name">{name}</span>
          <img className="rank-detail-lvl" src={level} />
          {estReward && (
            <span className="est">
              <img src={beanIcon} />
              {estReward}
            </span>
          )}
          <span className="rank-detail-score">
            <img src={talent ? gemIcon : beanIcon} />
            {score}
          </span>
        </div>
      )}
    </div>
  );
}
