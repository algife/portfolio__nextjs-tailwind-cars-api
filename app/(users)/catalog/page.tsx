"use client";
import SearchResults from "@/components/catalog/SearchResults";
import SearchBar from "@/components/search/SearchBar";
import { CatalogPageProps } from "@/typings.d";

export default function CatalogPage({ searchParams }: CatalogPageProps) {
  return (
    <div className="catalog__container">
      <div className="catalog__text-container">
        <h1 className="text-4xl font-extrabold mt-5">Our selection of cars.</h1>
        <p>Find your most desired car.</p>
      </div>
      <div className="catalog__search-area">
        <SearchBar />
        <SearchResults {...{ searchParams }} />
      </div>
    </div>
  );
}
