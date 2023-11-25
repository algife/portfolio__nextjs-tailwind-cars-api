"use client";
import useSearch from "@/hooks/useSearch";
import { setLoadingStart } from "@/redux/actions/global-ui.actions";
import { CustomFilterProps } from "@/typings.d";
import { sentenceCase, tryParseIntOrContinue } from "@/utils/functions";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import HelperText from "../HelperText";

type CustomFilterOption = {
  title: string;
  value: string;
};

const CustomFilter = ({
  name,
  options: rawOptions,
  formMethods,
}: CustomFilterProps) => {
  const dispatch = useDispatch();
  const EMPTY_TITLE = name;
  const parsedOptions: CustomFilterOption[] = [
    // Allow Empty option
    { title: EMPTY_TITLE, value: "" },
    // option´s list
    ...rawOptions.map((opt) => ({
      title: `${opt}`,
      value: `${opt}`,
    })),
  ];
  const [listboxOptionSelected, setListboxOptionSelected] =
    useState<CustomFilterOption>();

  const { register, getValues, setValue } = formMethods;
  const search = useSearch();

  const handleSelectValueChange = (optSel: CustomFilterOption) => {
    dispatch(setLoadingStart());
    setListboxOptionSelected(optSel);
    // Update form
    const parsedValue = tryParseIntOrContinue(optSel.value);
    setValue(name, parsedValue, { shouldValidate: true });

    // Update Search by URL
    search({ [name]: parsedValue }, false);
  };

  const autoFillOnLoad = () => {
    const val = parsedOptions.find(
      (opt) => tryParseIntOrContinue(opt.value) == (getValues()[name] ?? "")
    );
    setListboxOptionSelected(val);
  };

  // Auto fill on load
  useEffect(() => {
    autoFillOnLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    formState: { errors },
  } = formMethods;

  return (
    <div className="flex flex-col w-full">
      <div className={`w-fit custom-filter custom-filter--${name}`}>
        <Listbox {...register(name)} onChange={handleSelectValueChange}>
          <div className="custom-filter__listbox">
            <Listbox.Button className="custom-filter__btn">
              <span className="block truncate">
                {!listboxOptionSelected
                  ? sentenceCase(name)
                  : typeof listboxOptionSelected.title === "string"
                  ? sentenceCase(listboxOptionSelected.title)
                  : listboxOptionSelected.title}
              </span>
              <Image
                src="/chevron-up-down.svg"
                width={20}
                height={20}
                className=""
                alt="chevron up and down"
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="custom-filter__options">
                {parsedOptions.map((option) => (
                  <Listbox.Option
                    key={option.title}
                    value={option}
                    className={({ active }) =>
                      `custom-filter__option ${
                        option.title === EMPTY_TITLE
                          ? "text-gray-400 italic"
                          : active
                          ? "bg-primary-blue text-primary-blue-100"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {({ selected }) => (
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {typeof option.title === "string"
                          ? option.title === EMPTY_TITLE
                            ? "None"
                            : sentenceCase(option.title)
                          : option.title}
                      </span>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
      <HelperText
        className="text-red-500 flex-1 relative inline"
        show={!!errors[name]}
        text={errors[name]?.message ?? ""}
      />
    </div>
  );
};
export default CustomFilter;
