import { selectRandomSuperCar } from "@/utils/functions";
import CarImage from "./CarImage";
import HeroCta from "./HeroCta";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text-container">
        <h1 className="hero__title">
          <strong>Drive your dream car</strong>
        </h1>
        <p className="hero__subtitle">in the snap of a finger!</p>

        <HeroCta />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <CarImage
            car={selectRandomSuperCar()}
            angle={23}
            alt="Hero image of a car"
          />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
