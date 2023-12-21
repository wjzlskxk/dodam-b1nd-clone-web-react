import "../../styles/Profile.css";
import ProfileImg from "../../img/profile.jpeg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="my-info">
        <img src={ProfileImg} />
        <div className="my">
          <div className="log">
            <h1 className="my-name">전민찬</h1>
            <a className="my-log">내 정보</a>
          </div>
          <h4 className="my-grade">1학년 3반 18번</h4>
        </div>
        <button className="logout">로그 아웃</button>
      </div>

      <div className="selection-nav">
        <div className="slct-wake-up">기상송</div>
        <div className="slct-lost-found">분실물</div>
      </div>

      <div className="selection-info">
        <div>기상송 신청내역이 없습니다.</div>
        <div className="slct-info-two">신청하시면 생활이 윤택해질 거에요!</div>
      </div>
    </div>
  );
};

export default Profile;
