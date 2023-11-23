"use client";
import { SearchButtonProps } from "@/typings.d";
import Image from "next/image";

const SearchButton = ({ extraClasses = "" }: SearchButtonProps) => {
  return (
    <button
      type="submit"
      className={`${extraClasses} searchbar__submit-btn`}
      tabIndex={-1}
    >
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={80}
        height={80}
        className="object-contain"
      />
    </button>
  );
};

export default SearchButton;
