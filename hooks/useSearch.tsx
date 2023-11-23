import { CarSearchFilterPropsPartial } from "@/typings.d";
import { trimLowercaseOrEmptyString } from "@/utils/functions";
import { useRouter } from "next/navigation";

const _buildSearchParams = (
  filters: CarSearchFilterPropsPartial,
  ignorePrevious: boolean = false
) => {
  const searchParams = new URLSearchParams(window.location.search);
  if (ignorePrevious) Object.keys(filters).map((k) => searchParams.delete(k));

  // Set the specified search parameter to the given value
  Object.keys(filters)
    .filter((k) => !["limit"].includes(k))
    .forEach((filterK: string) => {
      // Normalize data
      const value = filters[filterK as keyof CarSearchFilterPropsPartial];
      const filterV = trimLowercaseOrEmptyString(value);

      if (filterV === "") searchParams.delete(filterK);
      else searchParams.set(filterK, filterV);
    });

  return searchParams;
};

const _parseFilterSearchToSearchParams = (
  filters: CarSearchFilterPropsPartial,
  ignorePrevious: boolean = false
) => {
  const searchParams = _buildSearchParams(filters, ignorePrevious);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

const useSearch = () => {
  const router = useRouter();

  return (
    filters: CarSearchFilterPropsPartial,
    ignorePrevious: boolean = false
  ) => {
    // Update the url
    const newPathName = _parseFilterSearchToSearchParams(
      filters,
      ignorePrevious
    );

    router.push(newPathName);
  };
};

export default useSearch;
