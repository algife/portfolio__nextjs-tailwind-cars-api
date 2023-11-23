"use client";
import { useRouter } from "next/navigation";
import CustomButton from "./buttons/CustomButton";
import { selectRandomSuperCar } from "@/utils/functions";
import CarImage from "./CarImage";

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/catalog");
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
