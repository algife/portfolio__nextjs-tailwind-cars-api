"use client";
import { CustomButtonProps } from "@/typings.d";
import Image from "next/image";

const CustomButton = ({
  label,
  handleClick,
  containerStyles = "",
  textStyles = "",
  btnType = "button",
  isDisabled = false,
  leftIcon,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`custom-button ${containerStyles}`}
      onClick={handleClick}
    >
      {/* LEFT ICON */}
      {leftIcon && (
        <Image
          src={leftIcon}
          alt="Left icon"
          width={20}
          height={20}
          className="object-contain"
        />
      )}

      {/* LABEL */}
      <span className={`flex-1 ${textStyles}`}>{label}</span>

      {/* RIGHT ICON */}
      {rightIcon && (
        <Image
          src={rightIcon}
          alt="Right icon"
          width={20}
          height={20}
          className="object-contain"
        />
      )}
    </button>
  );
};

export default CustomButton;
