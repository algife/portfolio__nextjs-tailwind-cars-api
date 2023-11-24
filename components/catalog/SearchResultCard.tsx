"use client";
import { CarProps } from "@/typings.d";
import { calculateCarRentString, getCarName } from "@/utils/functions";
import Image from "next/image";
import { useState } from "react";
import CarImage from "../CarImage";
import CustomButton from "../buttons/CustomButton";
import CarDetailsDialog from "../dialog/CarDetailsDialog";

const SearchResultCard = ({ car }: { car: CarProps }) => {
  const { city_mpg, year, transmission, drive, fuel_type } = car;
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const router = useRouter();

  const carRent = calculateCarRentString(city_mpg, year);
  const handleSeeDetailsClick = () => {
    setIsModalOpen(true);
    // router.push(`/discover/${getCarId(car)}`);
  };

  return (
    <div className="details-card group">
      <h2 className="details-card__title">
        {getCarName(car)} {car.class}
      </h2>
      <p className="flex mt-6 details-card__rent">
        <span className="text-[32px] font-extrabold details-card__rent__amount">
          {carRent}
        </span>
        <span className="self-center ml-1 mt-2 text-[14px] font-semibold details-card__rent__currency">
          &euro;
        </span>
        <span className="self-center ml-1 mt-2 text-[14px] font-medium details-card__rent__period">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <CarImage car={car} alt="The Car image" priority={false} />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          {
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/steering-wheel.svg"
                alt="steering wheel"
                width={20}
                height={20}
              />
              <p className="text-[14px]">
                {fuel_type === "electricity"
                  ? "Electric"
                  : transmission === "a"
                  ? "Automatic"
                  : "Manual"}
              </p>
            </div>
          }
          {drive && (
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tire.svg" alt="tire" width={20} height={20} />
              <p className="text-[14px]">{drive.toUpperCase()}</p>
            </div>
          )}
          {city_mpg && (
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/gas.svg" alt="gas" width={20} height={20} />
              <p className="text-[14px]">{city_mpg} MPG</p>
            </div>
          )}
        </div>
        <div className="details-card__btn-container">
          <CustomButton
            label="See details"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={handleSeeDetailsClick}
          />
        </div>
      </div>
      <CarDetailsDialog {...{ car, isModalOpen, setIsModalOpen }} />
    </div>
  );
};

export default SearchResultCard;
