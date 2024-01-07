import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface UserStaete {
  isLogin: boolean;
  setIsLogin: (isLogin: boolean) => void;
  accessToken: string;
  setAccessToken: (accessToken: string) => void;
}

const useUserStore = create<UserStaete>()(
  persist(
    (set) => ({
      isLogin: false,
      setIsLogin: (isLogin: boolean) => {
        set({ isLogin });
        setTimeout(() => {
          set({ isLogin: false });
        }, 1000 * 60 * 60 * 3);
      },
      accessToken: "",
      setAccessToken: (accessToken: string) => {
        set({ accessToken });
        setTimeout(() => {
          set({ accessToken: "" });
        }, 1000 * 60 * 60 * 3);
      },
    }),
    {
      name: "gaon_user_store",
    }
  )
);

export default useUserStore;
