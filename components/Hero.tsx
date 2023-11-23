"use client";
import CustomButton from "./buttons/CustomButton";

const Hero = () => {
  const handleClick = () => {
    console.log("btn clicked");
  };
  return (
    <div className="hero">
      <div className="hero-text-container">
        <h1 className="hero__title">
          <strong>Drive your dream car</strong>
        </h1>
        <p className="hero__subtitle">in the snap of a finger!</p>

        <CustomButton
          label="Find my dream car"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 hero__cta-button"
          {...{ handleClick }}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">(CAR IMAGE)</div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
};

export default Hero;
