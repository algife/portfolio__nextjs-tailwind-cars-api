/* Types go here */

import { MouseEventHandler } from "react";

export enum RenderingMethod {
  "ISR" = "ISR", // Incremental Static Regeneration → data is fetched once on build time and again in subsequent visits after a certain cooldown time.
  "SSR" = "SSR", // Server Side Rendering → data is fetched before every single render
  "SSG" = "SSG", // Static Site Generation → the data is fetched once at build time
}
export type CustomButtonProps = {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset";
  isDisabled?: boolean;
  textStyles?: string;
  label: React.ReactElement | string;
};
