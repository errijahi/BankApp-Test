import { create } from "zustand";
import axios from "axios";
import useApiStore from "./hostStore"; // Import dynamic API store

interface BankStore {
  user: any | null;
  balance: number | null;
  avgWithdraw: number | null;
  avgDeposit: number | null;
  transactions: any[];
  isLoading: boolean;
  error: string | null;
  firstTask:boolean,
  secondTask:boolean,
  thirdTask:boolean,
  fetchUser: (id: number) => Promise<void>;
  fetchBalance: (id: number) => Promise<void>;
  fetchAvgWithdraw: (id: number) => Promise<void>;
  fetchAvgDeposit: (id: number) => Promise<void>;
  fetchTransactions: (id: number) => Promise<void>;
  fetchAllData: (id: number) => Promise<void>;
}

const useBankStore = create<BankStore>((set, get) => ({
  user: null,
  balance: null,
  avgWithdraw: null,
  avgDeposit: null,
  transactions: [],
  isLoading: false,
  error: null,
  firstTask:false,
  secondTask:false,
  thirdTask:false,

  fetchUser: async (id: number) => {
    const apiUrl = useApiStore.getState().apiUrl; // Get latest API URL
    set({ isLoading: true, error: null, thirdTask:true });
    try {console.log("apiUrl", `${apiUrl}/user?id=${id}`)
      const response = await axios.get(`${apiUrl}/user?id=${id}`);
      set({ user: response.data });
    } catch (error) {
      set({ error: "Failed to load user data", thirdTask:false});
    } finally {
      set({ isLoading: false });
    }
  },

  fetchBalance: async (id: number) => {
    const apiUrl = useApiStore.getState().apiUrl;
    set({ isLoading: true, error: null, firstTask: true });
    try {
      const response = await axios.get(`${apiUrl}/balance?id=${id}`);
      set({ balance: response.data });
    } catch (error) {
      set({ error: "Failed to load balance", firstTask: false });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchAvgWithdraw: async (id: number) => {
    const apiUrl = useApiStore.getState().apiUrl;
    set({ isLoading: true, error: null, firstTask: true });
    try {
      const response = await axios.get(`${apiUrl}/average-withdraw?id=${id}`);
      set({ avgWithdraw: response.data });
    } catch (error) {
      set({ error: "Failed to load withdrawal data", firstTask: false });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchAvgDeposit: async (id: number) => {
    const apiUrl = useApiStore.getState().apiUrl;
    set({ isLoading: true, error: null, firstTask: true });
    try {
      const response = await axios.get(`${apiUrl}/average-deposit?id=${id}`);
      set({ avgDeposit: response.data });
    } catch (error) {
      set({ error: "Failed to load deposit data", firstTask: false });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchTransactions: async (id: number) => {
    const apiUrl = useApiStore.getState().apiUrl;
    set({ isLoading: true, error: null, secondTask:true });
    try {
      const response = await axios.get(`${apiUrl}/transactions?id=${id}`);
      set({ transactions: response.data });
    } catch (error) {
      set({ error: "Failed to load transactions", secondTask:false });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchAllData: async (id: number) => {
    set({ isLoading: true, error: null });
    try {
      await Promise.all([
        get().fetchUser(id),
        get().fetchBalance(id),
        get().fetchAvgWithdraw(id),
        get().fetchAvgDeposit(id),
        get().fetchTransactions(id),
      ]);
    } catch (error) {
      set({ error: "Failed to load all data" });
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useBankStore;
