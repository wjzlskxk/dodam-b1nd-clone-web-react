import "../Join/Join.css";
import JoinImg from "../../img/join.png";

const Join = () => {
  return (
    <div className="join">
      <div className="join-info">
        <img src={JoinImg} />
        <h1 className="join-title">신청</h1>
        <div className="join-items">
          <span className="studyroom">자습실</span>
          <span className="goout">외출</span>
          <span className="sleephome">외박</span>
          <span className="bus">버스</span>
        </div>
      </div>
      <div className="join-content">현재 위치 정보가 없습니다.</div>
    </div>
  );
};

export default Join;
