import { keysSearchFilters } from "@/config/constants";
import { setSearchParam } from "@/redux/actions/search.actions";
import { UpdateSearchStateHookProps } from "@/typings.d";
import {
  findManufacturer,
  sentenceCase,
  tryParseIntOrContinue,
} from "@/utils/functions";
import { useDispatch } from "react-redux";

const useUpdateSearchStateFromUrl = ({
  setValue,
}: UpdateSearchStateHookProps) => {
  const dispatch = useDispatch();

  return () => {
    const searchParams = new URLSearchParams(window.location.search);
    keysSearchFilters.forEach((pKey) => {
      if (searchParams.size > 0) {
        let pValue: any = searchParams.get(pKey);

        // parsing special params
        if (pKey === "manufacturer") pValue = findManufacturer(pValue);
        if (pKey === "model") pValue = sentenceCase(pValue);
        if (pKey === "year") pValue = tryParseIntOrContinue(pValue);

        pValue = pValue ?? "";

        // Update form field value
        setValue(pKey, pValue, { shouldValidate: true });
        // Update the state
        dispatch(setSearchParam({ [pKey]: pValue }));
      }
    });
  };
};

export default useUpdateSearchStateFromUrl;
