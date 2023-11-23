"use client";
import { CustomButtonProps } from "@/typings.d";

const CustomButton = ({
  label,
  handleClick,
  containerStyles = "",
  textStyles = "",
  btnType = "button",
  isDisabled = false,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`custom-button ${containerStyles}`}
      onClick={handleClick}
    >
      {/* LABEL */}
      <span className={`flex-1 ${textStyles}`}>{label}</span>
    </button>
  );
};

export default CustomButton;
