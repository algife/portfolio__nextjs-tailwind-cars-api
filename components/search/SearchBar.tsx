"use client";
import useSearch from "@/hooks/useSearch";
import useUpdateSearchStateFromUrl from "@/hooks/useUpdateSearchStateFromUrl";
import { CarSearchFilterPropsPartial } from "@/typings.d";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import SearchButton from "./SearchButton";
import SearchByManufacturer from "./SearchByManufacturer";
import SearchByModel from "./SearchByModel";

const SearchBar = () => {
  // RHF: React Hook Form
  const formMethods = useForm<CarSearchFilterPropsPartial>({
    reValidateMode: "onChange",
    defaultValues: {
      manufacturer: "",
      model: "",
      fuel: undefined,
      year: undefined,
    },
  });

  const updateSearchStateFromUrl = useUpdateSearchStateFromUrl({
    setValue: formMethods.setValue,
  });
  useEffect(() => {
    updateSearchStateFromUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const search = useSearch();
  const handleSubmit: SubmitHandler<CarSearchFilterPropsPartial> = (data) =>
    search(data, true);

  return (
    <FormProvider {...formMethods}>
      <form
        name="searchbar"
        id="searchbar"
        className="searchbar searchbar__form"
        onSubmit={formMethods.handleSubmit(handleSubmit)}
      >
        <div className="searchbar__filter-container">
          <div className="searchbar__filter-group">
            <SearchByManufacturer {...{ formMethods }} />
            <SearchByModel {...{ formMethods }} />
            <SearchButton extraClasses="max-sm:hidden" />
            <div className="searchbar__filter-group">
              <div className="flex gap-2 justify-center">
                (FUEL FILTER)
                <br />
                (YEAR FILTER)
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SearchBar;
