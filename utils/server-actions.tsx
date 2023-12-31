"use server";
import { manufacturers, mostDesiredSuperCars } from "@/config/constants";
import {
  CarProps,
  CarSearchFilterPropsPartial,
  FetchingMethod,
} from "@/typings.d";
import _ from "underscore";

// -----

export const checkEnvVars = async () => {
  const keys = [
    "NEXT_PUBLIC_RAPID_API_KEY",
    "NEXT_PUBLIC_IMAGIN_API_KEY",
    "NEXTAUTH_CLIENTID",
    "NEXTAUTH_SECRET",
    "NEXTAUTH_URL",
  ];

  const envVarsOk = keys.map((k) => process.env[k]).every(Boolean);
  return envVarsOk;
};

export const getFetchingMethod = (
  strategy: FetchingMethod
): RequestInit | undefined => {
  switch (strategy) {
    case "ISR":
      return { next: { revalidate: 60 * 60 * 24 } }; // revalidate every day
    case "SSR":
      return { cache: "no-cache" };
    case "SSG":
      return { cache: "force-cache" };
    default:
      return undefined;
  }
};

export const getCarId = (car: CarProps) =>
  /* As each car doesn't comes with an id from the API, we generate one based on its properties.*/
  Object.keys(car)
    .sort()
    .map((k) => (car as any)[k].toString().toLowerCase().replace(/\s+/g, "-"))
    .join("__");

export const getCarFromId = (carId: string): CarProps => {
  const properties = carId.split("__");

  // Assuming CarProps has the same properties as the original object
  const car: Partial<CarProps> = {};

  properties.forEach((property, index) => {
    // Reverse the transformation: replace dashes with spaces
    const originalValue = property.replace(/-/g, " ");

    // Assuming CarProps has the same properties as the original object
    (car as any)[Object.keys(car)[index]] = originalValue;
  });

  // Assuming CarProps has the same properties as the original object
  return car as CarProps;
};

export const calculateCarRentString = (
  city_mpg: CarProps["city_mpg"],
  year: CarProps["year"]
): string => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay: number = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const getRandomIntegerBetween = (a: number, b: number): number => {
  // Ensure min and max are integers
  if (b < a)
    throw new Error(
      "Invalid params, please make sure the first number used as parameter is below the second number"
    );
  const min = Math.ceil(a);
  const max = Math.floor(b);

  // Generate a random integer between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const selectRandomSuperCar = () => {
  const i = getRandomIntegerBetween(0, mostDesiredSuperCars.length - 1);
  return mostDesiredSuperCars[i];
};

export const trimLowercaseOrEmptyString = (
  str: string | number | null | undefined
) => (str ?? "").toString().trim().toLowerCase();

export const sentenceCase = (str: string) => {
  if ((str ?? "").toString().trim().length === 0) return "";

  return (str ?? "")
    .toString()
    .trim()
    .split(/\s+/g)
    .map(
      // each word:
      (w) =>
        // first character
        w[0].toLocaleUpperCase() +
        // rest of chars...
        w.slice(1, str.length).toLocaleLowerCase()
    )
    .join(" ");
};

export const tryParseIntOrContinue = (str: string | number) => {
  try {
    const parsed =
      !_.isUndefined(str) &&
      !_.isNull(str) &&
      !_.isNumber(str) &&
      parseInt(`${str}`, 10);

    return parsed !== false && !_.isNaN(parsed) ? parsed : str;
  } catch (err) {
    console.warn("Cannot parse Int from:" + str);
    return str;
  }
};
export const removeEmptyPropsFromObject = (
  obj: Record<string, any>,
  setValueToString: boolean = false
): Record<string, string> =>
  Object.keys(obj)
    .filter(
      (k) =>
        !_.isNull(obj[k]) &&
        !_.isUndefined(obj[k]) &&
        !(_.isString(obj[k]) && _.isEmpty(obj[k]))
    )
    .reduce(
      (acc, nextKey) => ({
        ...acc,
        [nextKey]: setValueToString ? `${obj[nextKey]}` : obj[nextKey],
      }),
      {}
    );

export const parseParamsForAPI = (
  obj: CarSearchFilterPropsPartial
): URLSearchParams => {
  let result: Record<string, any> = removeEmptyPropsFromObject(obj, true);

  // manufacturer --> make
  if (obj.manufacturer) result.make = obj.manufacturer;
  delete result.manufacturer;

  // fuel --> fuel_type
  if (obj.fuel) result.fuel_type = obj.fuel;
  delete result.fuel;

  // Add an explicit limit in the request to avoid the default one
  result.limit = `${50}`;

  return new URLSearchParams(result);
};

export const findManufacturer = (qm: string | undefined): string => {
  if (_.isNull(qm) || _.isUndefined(qm)) return "";
  return (
    manufacturers.find((m) =>
      trimLowercaseOrEmptyString(m)
        .replace(/\s+/g, "")
        .includes(trimLowercaseOrEmptyString(qm).replace(/\s+/g, ""))
    ) ?? ""
  );
};

export const getCarName = ({
  make,
  model,
  fuel_type,
  year,
}: CarProps): React.ReactElement => (
  <>
    <div className="car-name__make-and-model">
      {sentenceCase(make)} {sentenceCase(model)}
    </div>
    <div className="car-name__fuel-and-year">
      {`${sentenceCase(fuel_type)} -- ${year}`}
    </div>
  </>
);
