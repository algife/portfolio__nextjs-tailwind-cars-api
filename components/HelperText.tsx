import { HelperTextProps } from "@/typings.d";

const HelperText = ({ text, show, className }: HelperTextProps) => {
  return show && <p className={`mt-2 mx-auto text-xs helper-text ${className}`}>{text}</p>;
};
export default HelperText;
