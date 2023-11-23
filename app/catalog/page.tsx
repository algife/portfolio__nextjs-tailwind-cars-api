"use client";
import SearchResults from "@/components/catalog/SearchResults";
import SearchBar from "@/components/search/SearchBar";

export default function CatalogPage() {
  const searchParams = {}; //TODO
  return (
    <>
      <div className="catalog__text-container justify-items-center">
        <h1 className="text-4xl font-extrabold mt-5">Our selection of cars.</h1>
        <p>Find your most desired car.</p>
      </div>
      <div className="mt-2 mx-0 w-full">
        <SearchBar />
        <SearchResults {...{ searchParams }} />
      </div>
    </>
  );
}
