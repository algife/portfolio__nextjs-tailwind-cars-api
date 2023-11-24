"use client";
import { BackButtonProps } from "@/typings.d";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import useSearch from "@/hooks/useSearch";

const GoBackButton = ({
  page = -1,
  isSecondaryButton = true,
}: BackButtonProps) => {
  const search = useSearch();

  const isFirstPage = page === 1;
  const router = useRouter();
  const handleNavigation = () => {
    if (page > 1) {
      // It's a results navigation
      search({ page: isFirstPage ? 1 : page - 1 }, false);
      return;
    } // else the user wants to come back in history
    router.back();
  };

  return (
    !isFirstPage && (
      <div className="go-back-button">
        <CustomButton
          label={
            <div className="inline-flex items-center justify-center">
              <span className="ms-2">Go Back</span>
            </div>
          }
          leftIcon="/arrow-left.svg"
          btnType="button"
          containerStyles={
            isSecondaryButton
              ? "border border-primary-blue border-3 rounded-full"
              : "px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900"
          }
          handleClick={handleNavigation}
        />
      </div>
    )
  );
};

export default GoBackButton;
