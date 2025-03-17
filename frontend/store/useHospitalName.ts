import { create } from "zustand";

import { FilterItem } from "types/dataType";

interface DataState {
  data: FilterItem[];
  setData: (data: FilterItem[]) => void;
  filteredData: FilterItem[];
  setFilteredData: (filteredData: FilterItem[]) => void;
}

export const useHospitalStore = create<DataState>(set => ({
  data: [],
  filteredData: [],
  setData: data => set({ data }),
  setFilteredData: filteredData => set({ filteredData }),
}));
