import { create } from "zustand";

interface UserDetails {
  userId: string;
  setUserId: (userId: string) => void;
}

export const UserStore = create<UserDetails>((set) => ({
  userId: "",
  setUserId: (userId: string) => {
    set({ userId });
  },
}));
