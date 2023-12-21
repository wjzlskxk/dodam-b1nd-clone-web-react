import "../../styles/Between.css";
import TopOfProfile from "../../img/top_of_profile.svg";

const Between = () => {
  return (
    <div className="between-nav-and-main">
      <div className="important">공지사항</div>
      <span> 0/0 </span>
      <img src={TopOfProfile} />
    </div>
  );
};

export default Between;
