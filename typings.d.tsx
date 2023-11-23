/* Types go here */

import { MouseEventHandler } from "react";
import {
  UseFormGetValues,
  UseFormReturn,
  UseFormSetValue,
} from "react-hook-form";

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
export type ReduxState = {
  search: SearchStateSlice;
  auth: AuthStateSlice;
  globalUI: GlobalUIStateSlice;
};

};

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd"; // Possible values: fwd (front-wheel drive), rwd (rear-wheel drive), awd (all-wheel drive), 4wd (four-wheel drive)
  fuel_type: "gas" | "electricity" | "hybrid"; // Type of fuel used. Possible values: gas, diesel, electricity
  highway_mpg: number;
  make: string;
  model: string;
  powerTrain: string;
  transmission: string;
  year: number;
}
export type CarSearchFilterPropsStrict = Pick<
  CarProps,
  "drive" | "model" | "transmission" | "year"
> & {
  fuel: CarProps["fuel_type"];
  year: CarProps["year"];
  manufacturer: CarProps["make"];

  // Not strict props
  page?: number;
  limit?: string; // stringified
};

export type GlobalUIStateSlice = {
  isLoading: boolean;
};

export type SearchStateSlice = {
  filters: CarSearchFilterPropsPartial;
  results: CarProps[];
};

export interface WithSearchParamsProp {
  searchParams: CarSearchFilterPropsPartial;
}
export interface SearchResultsProps extends WithSearchParamsProp {}
export interface CatalogPageProps extends WithSearchParamsProp {}
export type SearchHookProps = {
  getValues: UseFormGetValues<CarSearchFilterPropsPartial>;
};
export type UpdateSearchStateHookProps = {
  setValue: UseFormSetValue<CarSearchFilterPropsPartial>;
};
export interface SearchFilterComponentProps {
  formMethods: UseFormReturn<CarSearchFilterPropsPartial, any, undefined>;
}

export interface CustomFilterProps {
  name: keyof CarSearchFilterPropsStrict;
  options: (string | number)[];
  formMethods: UseFormReturn<CarSearchFilterPropsPartial, any, undefined>;
}

export type CarSearchFilterPropsPartial = Partial<CarSearchFilterPropsStrict>;

export interface HelperTextProps {
  text: string;
  show: boolean;
}
export interface BackButtonProps {
  page?: number;
  isSecondaryButton?: boolean;
}
export interface ShowMoreButtonProps extends BackButtonProps {
  totalCount: number;
}
