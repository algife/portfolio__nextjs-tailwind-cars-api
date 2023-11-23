"use client";
import { manufacturers } from "@/config/constants";
import useSearch from "@/hooks/useSearch";
import { SearchFilterComponentProps } from "@/typings.d";
import {
  findManufacturer,
  trimLowercaseOrEmptyString,
} from "@/utils/functions";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useMemo } from "react";
import _ from "underscore";
import SearchButton from "./SearchButton";

const SearchByManufacturer = ({ formMethods }: SearchFilterComponentProps) => {
  const name = "manufacturer";
  const search = useSearch();

  // RHF: React Hook Form
  const {
    setValue,
    register,
    watch,
    formState: { errors },
  } = formMethods;

  const _query = watch(name);
  const debounceSendQuery = useMemo(
    () =>
      _.debounce((q: string) => {
        if (q.trim() === "") {
          setValue(name, ""); // Update the UI with the right name in sentence case
          search({ manufacturer: "" }, false);
          return;
        } else {
          // This search function will be called once every 500ms after the user stops typing.
          const found = findManufacturer(q);

          const valueWithFallback = found ?? q ?? "";
          setValue(name, valueWithFallback); // Update the UI with the right name in sentence case

          search({ manufacturer: valueWithFallback }, false);
          return;
        }
      }, 500),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [_query]
  );

  const handleComboboxChange = (value: string) => {
    // Auto search on query changes:
    debounceSendQuery(value ?? "");
  };
  const EMPTY_OPTION_VALUE = "";
  const options = [EMPTY_OPTION_VALUE, ...manufacturers];

  const filteredOptions =
    _query === ""
      ? options
      : options.filter((m) =>
          trimLowercaseOrEmptyString(m)
            .replace(/\s+/g, "")
            .includes(trimLowercaseOrEmptyString(_query).replace(/\s+/g, ""))
        );

  return (
    <div className="form-control searchbar__item search__manufacturer">
      <Combobox value={_query} onChange={handleComboboxChange}>
        <div className="searchbar__combobox">
          <Combobox.Button className="searchbar__img-container">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="searchbar__img search-manufacturer__image"
              alt="car logo"
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            {...register(name)}
            className="searchbar__input search-manufacturer__input"
            displayValue={(v: string) => v}
            placeholder="Volkswagen..."
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            // afterLeave={handleSelectionLeave} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredOptions.length === 0 && _query !== "" && (
                <Combobox.Option
                  value={_query}
                  className="search-manufacturer__option"
                >
                  {`'${_query}' not found.`}
                </Combobox.Option>
              )}
              {filteredOptions.length > 0 &&
                filteredOptions.map((option) => (
                  <Combobox.Option
                    key={option}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={option}
                  >
                    {({ active, disabled, selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          } ${option === "" ? "text-gray-400 italic" : ""}`}
                        >
                          {option === "" ? "None" : option}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {/* {selected && (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active
                                ? "text-white"
                                : "text-primary bg-primary-purple"
                            }`}
                          />
                        )} */}
                      </>
                    )}
                  </Combobox.Option>
                ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

      <SearchButton extraClasses="sm:hidden" />
    </div>
  );
};

export default SearchByManufacturer;
