import React,{useEffect,useState} from 'react'

const OverAll = () => {
  console.log('overall Leaderboard component');
  const [leaderboardInfo, setLeaderboardInfo] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.streamkar.net/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20240422_tile&rankIndex=12&pageNum=1&pageSize=20');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("data...???",data);
        setLeaderboardInfo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array to run only once on component mount


  return (
    <div>OverAll</div>
  );
}

export default OverAll;