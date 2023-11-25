"use client";
import { fuels, yearsOfProduction } from "@/config/constants";
import useSearch from "@/hooks/useSearch";
import useUpdateSearchStateFromUrl from "@/hooks/useUpdateSearchStateFromUrl";
import { CarSearchFilterPropsPartial } from "@/typings.d";
import SearchBarValidationSchema from "@/validation/search-form/searchbar-form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import CustomFilter from "./CustomFilter";
import SearchButton from "./SearchButton";
import SearchByManufacturer from "./SearchByManufacturer";
import SearchByModel from "./SearchByModel";

// -----

const SearchBar = () => {
  const search = useSearch();

  // RHF: React Hook Form
  const formMethods = useForm<CarSearchFilterPropsPartial>({
    reValidateMode: "onChange",
    resolver: zodResolver(SearchBarValidationSchema), // Validate using Zod schema
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

  const formErrors = formMethods.formState.errors;

  const handleSubmit: SubmitHandler<CarSearchFilterPropsPartial> = (
    formData
  ) => {
    // 1. Validate first.
    const hasFormErrors =
      !formMethods.formState.isValid ||
      (Object.keys(formMethods.formState.touchedFields).length > 0 &&
        Object.keys(formErrors).length > 0);

    if (!hasFormErrors) {
      // 2. Submit if passes validation
      return search(formData, true);
    } else {
      console.log(formMethods.formState);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form
        name="searchbar"
        id="searchbar"
        className="searchbar"
        onSubmit={formMethods.handleSubmit(handleSubmit)}
      >
        <div className="searchbar__filter-container">
          <div className="searchbar__filter-group">
            <SearchByManufacturer formMethods={formMethods} />
            <SearchByModel formMethods={formMethods} />
            <SearchButton extraClasses="relative max-sm:hidden min-w-[32px]" />
            <div className="searchbar__filter-group">
              <div className="flex gap-2 justify-center">
                <CustomFilter
                  name="fuel"
                  options={fuels}
                  formMethods={formMethods}
                />
                <CustomFilter
                  name="year"
                  options={yearsOfProduction}
                  formMethods={formMethods}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default SearchBar;
