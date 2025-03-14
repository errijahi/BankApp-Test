import { create } from "zustand";

interface ApiStore {
  apiUrl: string;
  setApiUrl: (newUrl: string) => void;
}

const useApiStore = create<ApiStore>((set) => ({
  apiUrl: "http://127.0.0.1:8080/api", // Default API URL
  setApiUrl: (newUrl) => set({ apiUrl: newUrl }),
}));

export default useApiStore;
