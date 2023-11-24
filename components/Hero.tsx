"use client";
import { selectRandomSuperCar } from "@/utils/functions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CarImage from "./CarImage";
import CustomButton from "./buttons/CustomButton";

const Hero = () => {
  const router = useRouter();
  const ctaHref =
    "/catalog?" +
    // inject a sample query
    new URLSearchParams({
      manufacturer: "Ford",
      model: "Mustang",
      page: "1",
    }).toString();

  const handleClick = () => router.push(ctaHref);

  useEffect(
    () => router.prefetch(ctaHref),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ctaHref]
  );

  return (
    <div className="hero">
      <div className="hero__text-container">
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
