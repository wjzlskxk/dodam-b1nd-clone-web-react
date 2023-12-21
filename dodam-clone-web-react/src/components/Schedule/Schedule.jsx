import "../../styles/Schedule.css";
import ScheduleImg from "../../img/schedule.png";

const Schedule = () => {
  return (
    <div className="today-schedule">
      <div className="schd-info">
        <img src={ScheduleImg} />
        <h1 className="schd-title">오늘의 일정</h1>
        <span className="more-schd">더보기 ></span>
      </div>
      <div className="schd-content">오늘은 일정이 없습니다.</div>
    </div>
  );
};

export default Schedule;
