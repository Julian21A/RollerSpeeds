import "./home.css";
import skattingArt3 from "../../assets/skattingArt3.jpg"

export function Home() {
  return (
    <div>
      <img
        className="home-splash"
        id="home-splash"
        src={skattingArt3}
        width="970px"
        height="547px"
        alt="wallpaper"
      />
    </div>
  );
}

export default Home;
