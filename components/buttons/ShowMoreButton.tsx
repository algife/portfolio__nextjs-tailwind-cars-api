"use client";
import { ITEMS_PER_PAGE } from "@/config/constants";
import useSearch from "@/hooks/useSearch";
import CustomButton from "./CustomButton";
import { ShowMoreButtonProps } from "@/typings.d";

const ShowMoreButton = ({ page = 1, totalCount = 0 }: ShowMoreButtonProps) => {
  const search = useSearch();
  const isLastPage = +page * ITEMS_PER_PAGE >= totalCount;

  const handleNavigation = () => {
    search({ page: +page + 1 });
  };

  return (
    !isLastPage && (
      <div className="show-more-button">
        <CustomButton
          label="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      </div>
    )
  );
};

export default ShowMoreButton;
