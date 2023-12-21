import Song from "../../img/wake-up-song.png";
import "../WakeUpSong/WakeUpSong.css";
const WakeUpSong = () => {
  return (
    <div className="wake-up-song">
      <div className="wake-up-song-info">
        <img src={Song} />
        <h1 className="wake-up-song-title">오늘의 기상송</h1>
        <span className="more-wake-up-song">더보기 ></span>
      </div>
      <div className="wake-up-song-content">승인된 기상송이 없습니다.</div>
    </div>
  );
};

export default WakeUpSong;
