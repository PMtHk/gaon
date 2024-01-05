import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStaete {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
}

const useUserStore = create<UserStaete>()(
  persist(
    (set) => ({
      isAdmin: false,
      setIsAdmin: (isAdmin: boolean) => set({ isAdmin }),
      accessToken: "",
      setAccessToken: (accessToken: string) => set({ accessToken }),
    }),
    {
      name: "gaon_user_store",
    }
  )
);

export default useUserStore;