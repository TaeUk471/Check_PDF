// store/useTypeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface FileItem {
  fileId: string;
  group: string;
}

export interface TypeState {
  docType: string;
  setDocType: (newType: string) => void;
  selectedIds: string[];
  submittedIds: string[];
  folderNames: Record<string, string>;
  files: FileItem[];

  addSelectedId: (id: string) => void;
  removeSelectedId: (id: string) => void;
  clearSelected: () => void;
  clearSubmitted: () => void;

  addSubmittedIds: (ids: string[]) => void;
  addFolderName: (groupKey: string, folderName: string) => void;
  setFiles: (files: FileItem[]) => void;
  setFileGroup: (fileId: string, groupKey: string) => void;
}

export const useTypeStore = create<TypeState>()(
  persist(
    (set, get) => ({
      docType: "",
      setDocType: newType => {
        set({ docType: newType });
      },

      selectedIds: [],
      submittedIds: [],
      folderNames: {},
      files: [],

      addSelectedId: (id: string) => {
        const { selectedIds } = get();
        if (!selectedIds.includes(id)) {
          set({ selectedIds: [...selectedIds, id] });
        }
      },

      removeSelectedId: (id: string) => {
        const { selectedIds } = get();
        set({ selectedIds: selectedIds.filter(val => val !== id) });
      },

      clearSelected: () => {
        set({ selectedIds: [] });
      },

      addSubmittedIds: (ids: string[]) => {
        const { submittedIds } = get();
        const newSet = new Set([...submittedIds, ...ids]);
        set({ submittedIds: Array.from(newSet) });
      },

      clearSubmitted: () => {
        set({ submittedIds: [] });
      },

      addFolderName: (groupKey, folderName) => {
        const { folderNames } = get();
        set({
          folderNames: {
            ...folderNames,
            [groupKey]: folderName,
          },
        });
      },

      setFiles: files => {
        set({ files });
      },

      setFileGroup: (fileId, groupKey) => {
        const { files } = get();
        const newFiles = files.map(f => (f.fileId === fileId ? { ...f, group: groupKey } : f));
        set({ files: newFiles });
      },
    }),
    { name: "typeStore" },
  ),
);
