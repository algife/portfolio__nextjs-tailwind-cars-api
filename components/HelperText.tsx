import { HelperTextProps } from "@/typings.d";

const HelperText = ({ text, show }: HelperTextProps) => {
  return show && <p className="errorMsg">{text}</p>;
};
export default HelperText;
