import React, { useState } from "react";
import RestRank from "./RestRank.js";
import frameOne from "../images/Leaderboard/1st.png";
import frameTwo from "../images/Leaderboard/2nd.png";
import frameThree from "../images/Leaderboard/3rd.png";
import unknown from "../../assests/unknown.png";
import seemorebtn from "../../assests/see-more-btn.png";
import seelessbtn from "../../assests/see-less-btn.png";
import TopRank from "./TopRank.js";
import { getLevelUrl } from "../UtilityFunction/helper.js"
export default function LeaderBoardDummy({ talent, estReward, prev, data }) {
  const [dataLength, setDataLength] = useState(10);
  const changeSeeBtn = () => {
    if (dataLength === 10) {
      setDataLength(20);
    } else {
      setDataLength(10);
    }
  };
  let topData = data ? data?.slice(0, 3) : [];
  let restData = data ? data?.slice(3, dataLength) : [];
  if (topData.length == 2)
    topData.push({
      actorLevel: 0,
      liveType: 0,
      nickname: "",
      portrait: "",
      ranking: 0,
      userId: 0,
      userLevel: 0,
      userScore: 0,
    });

  return (
    <>
      <div className="leader-board">
        {topData?.map(
          (
            {
              actorLevel,
              userLevel,
              userId,
              nickname,
              userScore,
              desc,
              portrait,
            },
            i
          ) => {
            let rank = i + 1;
            var totalBeans;
            var text = prev ? "Won: " : "Est: ";

            if (rank === 1) {
              let cal = (estReward * 40) / 100;
              totalBeans = text + parseInt(cal);
            } else if (rank === 2) {
              let cal = (estReward * 30) / 100;
              totalBeans = text + parseInt(cal);
            } else if (rank === 3) {
              let cal = (estReward * 10) / 100;
              totalBeans = text + parseInt(cal);
            }
            return (
              <TopRank
                talent={talent}
                userId={userId}
                level={getLevelUrl(talent, talent ? actorLevel : userLevel)}
                name={nickname}
                rank={rank}
                avatar={portrait ? portrait : unknown}
                score={userScore}
                estReward={estReward && totalBeans}
                frame={
                  rank === 1
                    ? frameOne
                    : rank === 2
                    ? frameTwo
                    : rank === 3
                    ? frameThree
                    : null
                }
              />
            );
          }
        )}
        <div className="rest-rankk fancyScroll">
          {data.length > 0 ? (
            restData?.map(
              (
                {
                  actorLevel,
                  userLevel,
                  userId,
                  nickname,
                  userScore,
                  desc,
                  portrait,
                },
                i
              ) => {
                let rank = i + 4;

                var totalBeans;
                var text = prev ? "Won: " : "Est: ";
                if (rank === 4) {
                  let cal = (estReward * 10) / 100;
                  totalBeans = text + parseInt(cal);
                } else if (rank === 5) {
                  let cal = (estReward * 10) / 100;
                  totalBeans = text + parseInt(cal);
                }
                return (
                  <RestRank
                    userId={userId}
                    level={getLevelUrl(talent, talent ? actorLevel : userLevel)}
                    name={nickname}
                    avatar={portrait ? portrait : unknown}
                    rank={rank}
                    score={userScore}
                    talent={talent}
                    estReward={estReward && totalBeans}
                  />
                );
              }
            )
          ) : (
            <span className="flexCenter mrtop">No Record Found</span>
          )}
        </div>
      </div>
      {data.length > 10 && (
        <img
          className="seemore-btn mt-150"
          src={dataLength === 10 ? seemorebtn : seelessbtn}
          onClick={changeSeeBtn}
        />
      )}
    </>
  );
}
