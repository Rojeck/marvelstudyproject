import "./banner.scss";
import avengers from "../../resources/img/Avengers.png";

const Banner = () => {
  return (
    <div className="app__banner">
      <img src={avengers} alt="Avengers" />
      <div className="app__banner-text">
        New comics every week!
        <br />
        Stay tuned!
      </div>
      <img src={avengers} alt="Avengers logo" />
    </div>
  );
};

export default Banner;
