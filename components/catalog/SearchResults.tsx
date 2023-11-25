"use client";
import { ITEMS_PER_PAGE } from "@/config/constants";
import {
  setLoadingEnd,
  setLoadingStart,
} from "@/redux/actions/global-ui.actions";
import { setSearchResults } from "@/redux/actions/search.actions";
import { store } from "@/redux/store";
import { CarProps, SearchResultsProps } from "@/typings.d";
import { fetchCars, getCarId } from "@/utils/functions";
import { Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import _ from "underscore";
import GoBackButton from "../buttons/GoBackButton";
import ShowMoreButton from "../buttons/ShowMoreButton";
import SearchResultCard from "./SearchResultCard";

// export const preload = ({ searchParams }: SearchResultsProps) => {
//   // void evaluates the given expression and returns undefined
//   // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
//   void fetchCars({
//     manufacturer: searchParams.manufacturer || "",
//     model: searchParams.model || "",
//     fuel: searchParams.fuel || undefined,
//     year: searchParams.year || undefined,
//   });
// };

export default function SearchResults({ searchParams }: SearchResultsProps) {
  const dispatch = useDispatch();
  const storedList = store.getState().search.results ?? [];
  const [displayList, setDisplayList] = useState<CarProps[]>(storedList);
  const [pagination, setPagination] = useState<number>(1);

  const setResultsAndPagination = async () => {
    dispatch(setLoadingStart());

    const newPage: number = +(searchParams.page || 1);
    setPagination(newPage);

    const listFetched = await fetchCars({
      manufacturer: searchParams.manufacturer || "",
      model: searchParams.model || "",
      fuel: searchParams.fuel || undefined,
      year: searchParams.year || undefined,
    });

    // Set fetched list by Updating the state
    dispatch(setSearchResults(listFetched));
    const [startIndex, endIndex] = [
      Math.min(ITEMS_PER_PAGE * (newPage - 1), listFetched?.length ?? 0),
      Math.min(ITEMS_PER_PAGE * newPage, listFetched?.length ?? 0),
    ];

    const paginatedList: CarProps[] =
      (listFetched &&
        listFetched.hasOwnProperty("length") &&
        listFetched.slice(startIndex, endIndex)) ||
      [];

    setDisplayList(paginatedList);
    dispatch(setLoadingEnd());
  };

  useEffect(
    () => {
      setResultsAndPagination();
      return () => {};
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  );

  const storedFullResults = store.getState().search.results.length;

  const isDataEmpty = !displayList || _.isEmpty(displayList);
  const hasSomeFilterSearchParams = Object.keys(searchParams).length > 0;

  return (
    <Suspense fallback={<p>Loading list...</p>}>
      {/* Another "loading" technique for demo purposes */}
      {displayList && displayList.hasOwnProperty("error") ? (
        // Invalid parameters.
        <h2 className="text-center mt-5">
          Introduce some keyword to search for.
        </h2>
      ) : isDataEmpty ? (
        <div className="error-container">
          <h2 className="text-black text-xl font-bold">
            {!hasSomeFilterSearchParams
              ? `Introduce some keywords to search for.`
              : `No results`}
          </h2>
        </div>
      ) : (
        !isDataEmpty && (
          <>
            <section className="catalog__results">
              {displayList?.map((car: CarProps, _i: number) => (
                <SearchResultCard {...{ car }} key={getCarId(car)} />
              ))}
              <div className="catalog__buttons-container">
                <div className="catalog__button">
                  <GoBackButton page={pagination} />
                </div>
                <div className="catalog__button">
                  <ShowMoreButton
                    totalCount={storedFullResults}
                    page={pagination}
                  />
                </div>
              </div>
            </section>
          </>
        )
      )}
    </Suspense>
  );
}

// // Pre-fetch data for a faster User Experience (UX)
// export async function generateStaticParams(): Promise<{
//   preloadedCars: CarProps[];
// }> {
//   const preloadedCars = await fetchCars({
//     manufacturer: "Ford",
//     model: "Mustang",
//   });
//   return { preloadedCars };
// }
