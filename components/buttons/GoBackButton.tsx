"use client";
import { BackButtonProps } from "@/typings.d";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";

const GoBackButton = ({
  page = -1,
  isSecondaryButton = true,
}: BackButtonProps) => {
  const isFirstPage = page === 1;
  const router = useRouter();
  const handleNavigation = () => {
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
