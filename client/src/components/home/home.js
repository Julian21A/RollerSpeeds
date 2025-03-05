import "./home.css";
import skattingArt3 from "../../assets/skattingArt3.jpg";
import logo from "../../assets/logocompleto.png";

export function Home() {
  return (
    <div className="image-container">
      <img
        className="home-splash"
        id="home-splash"
        src={skattingArt3}
        alt="wallpaper"
      />
      <div> 
      </div>
      <div className="logo-space"> 
        <img
          className="logo"
          id="logo"
          src={logo}
          alt="wallpaper"
        />
      </div>
    </div>
  );
}

export default Home;
