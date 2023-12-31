"use client";
import useSearch from "@/hooks/useSearch";
import { SearchFilterComponentProps } from "@/typings.d";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useMemo } from "react";
import _ from "underscore";
import SearchButton from "./SearchButton";

const SearchByModel = ({ formMethods }: SearchFilterComponentProps) => {
  // RHF: React Hook Form
  const {
    getValues,
    setValue,
    register,
    watch,
    formState: { errors },
  } = formMethods;

  const _query = watch("model");
  const search = useSearch();
  const debounceSendQuery = useMemo(
    () =>
      _.debounce((q: string) => {
        // This search function will be called once every 500ms after the user stops typing.
        setValue("model", q);

        search({ model: q }, false);
      }, 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [_query]
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // Auto search on query changes (with throttling):
    // setValue("model", value);
    debounceSendQuery(value ?? "");
  };

  return (
    <div className="form-control searchbar__item search__model">
      <div className="searchbar__img-container">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="searchbar__img search-model__image"
          alt="car model"
        />
      </div>
      <input
        {...register("model")}
        type="text"
        onChange={handleInputChange}
        placeholder="Tiguan"
        className="searchbar__input search-model__input"
      />
      <SearchButton extraClasses="sm:hidden" />
    </div>
  );
};

export default SearchByModel;
