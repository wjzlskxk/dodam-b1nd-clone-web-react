import "../../styles/HeaderNav.css";
import Dodam from "../../img/dodam.svg";
const HeaderNav = () => {
  return (
    <nav className="nav-bar">
      <img src={Dodam} alt="도담도담" className="dodam" />
      <span>홈</span>
      <span>일정</span>
      <span>기상송</span>
      <span>분실물</span>
      <span>내정보</span>
      <span>심자신청</span>
      <span>DAuth</span>
      <span>DGIT</span>
      <span>리크루트</span>
    </nav>
  );
};

export default HeaderNav;
