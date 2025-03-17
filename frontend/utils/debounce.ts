import debounce from "lodash/debounce";

import { useHospitalStore } from "store/useHospitalName";

import { filterNameItems } from "./filter";

export const filterData = debounce((query: string) => {
  const { data, setFilteredData } = useHospitalStore.getState();
  setFilteredData(filterNameItems(query, data));
}, 300);
