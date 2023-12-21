import Banner from "./components/Banner/Banner.jsx";
import Between from "./components/Between-Main-Nav/Between.jsx";
import HeaderNav from "./components/Header/HeaderNav.jsx";
import Join from "./components/Join/Join.jsx";
import Schedule from "./components/Schedule/Schedule.jsx";
import WakeUpSong from "./components/WakeUpSong/WakeUpSong.jsx";
import Profile from "./components/Profile/Profile.jsx";

import "./App.css";
import Menu from "./components/Menu/Menu.jsx";
function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Between />
      <header>
        <Schedule />
        <Join />
        <Profile />
      </header>
      <section style={{ display: "block" }}>
        <Banner />
      </section>
      <footer>
        <WakeUpSong />
        <Menu />
      </footer>
    </div>
  );
}

export default App;
