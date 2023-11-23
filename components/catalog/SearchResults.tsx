"use client";
import { ITEMS_PER_PAGE } from "@/config/constants";
import { store } from "@/redux/store";
import { CarProps, SearchResultsProps } from "@/typings.d";
import { Suspense, useEffect, useState } from "react";
import _ from "underscore";
import SearchResultCard from "./SearchResultCard";
import { fetchCars } from "@/utils/functions";

export default function SearchResults({ searchParams }: SearchResultsProps) {
  const storedList = store.getState().search.results ?? [];
  const [displayList, setDisplayList] = useState<CarProps[]>(storedList);
  const [pagination, setPagination] = useState<number>(1);

  const setResultsAndPagination = async () => {
    const newPage: number = +(searchParams.page || 1);
    setPagination(newPage);

    const listFetched = await fetchCars({
      manufacturer: searchParams.manufacturer || "",
      model: searchParams.model || "",
    });
    // Set fetched list by Updating the state
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
  };

  useEffect(
    () => {
      setResultsAndPagination();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchParams]
  );

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
            <section className="catalog-wrapper">
              {displayList?.map((car: CarProps, _i: number) => (
                <SearchResultCard {...{ car }} key={_i.toString()} />
              ))}
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
