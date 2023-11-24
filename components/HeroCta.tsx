"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CustomButton from "./buttons/CustomButton";

export default function HeroCta() {
  const router = useRouter();

  const ctaHref =
    "/catalog?" +
    // inject a sample query
    new URLSearchParams({
      manufacturer: "Ford",
      model: "Mustang",
      page: "1",
    }).toString();

  const handleClick = () => {
    router.push(ctaHref);
  };

  // Prefetch the target URL for demo purposes
  useEffect(
    () => router.prefetch(ctaHref),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ctaHref]
  );

  return (
    <CustomButton
      label="Find my dream car"
      containerStyles="bg-primary-blue text-white rounded-full mt-10 hero__cta-button"
      {...{ handleClick }}
    />
  );
}
