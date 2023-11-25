import {
  CarProps,
  CarSearchFilterPropsPartial,
  FetchingMethod,
} from "@/typings.d";
import { getFetchingMethod, parseParamsForAPI } from "./server-actions";

// -----

export const fetchCars = async (
  filters: Exclude<CarSearchFilterPropsPartial, "page">
): Promise<CarProps[]> => {
  const HOST = "cars-by-api-ninjas.p.rapidapi.com";

  const params: URLSearchParams = parseParamsForAPI(filters);
  const url = new URL(`https://${HOST}/v1/cars?` + params);

  const options: RequestInit = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY ?? "",
      "X-RapidAPI-Host": HOST ?? "",
    },
    ...getFetchingMethod(FetchingMethod.ISR),
  };

  try {
    const response = await fetch(url, options);
    const result: CarProps[] = await response.json();

    if (result.hasOwnProperty("error")) {
      console.error("API Request error: ", (result as any).error);
      return [];
    }

    // sort by year
    result.sort((a, b) => b.year - a.year);

    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
};

// export const fetchCarById = async (id: string): Promise<CarProps[]> => {
//   const filters = {};
//   return fetchCars(filters);
// };

export const generateCarImageUrl = (
  { make, model = "", year }: Pick<CarProps, "make" | "model" | "year">,
  angle: number = 0
) => {
  const url = new URL("https://cdn.imagin.studio/getImage");

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || "img"
  );
  const modelFamily = model?.split(/\s+/g)[0] ?? "";
  url.searchParams.append("modelFamily", modelFamily);

  url.searchParams.append("make", make);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);

  if (angle && angle > 0) url.searchParams.append("angle", `${angle}`);

  // ! unexpected
  // url.searchParams.append("modelRange", "tonale");
  // url.searchParams.append("modelVariant", "od");
  // url.searchParams.append("powerTrain", "hybrid");
  // url.searchParams.append("transmission", "0");
  // url.searchParams.append("bodySize", "5");
  url.searchParams.append("trim", "eu");
  // url.searchParams.append("paintId", "pspc0286");
  url.searchParams.append("groundplaneadjustment", `${-0.5}`);

  return `${url}`;
};
