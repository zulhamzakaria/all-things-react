// authStore.ts
import { AuthActions, AuthState } from '@/utils/props';
import {create} from 'zustand';

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username, password) => {
    if (
        username === process.env.NEXT_PUBLIC_REACT_APP_USERNAME &&
        password === process.env.NEXT_PUBLIC_REACT_APP_PASSWORD
      ) {
        set({ isAuthenticated: true, user: { username } });
  }},
  logout: () => {
    // Perform logout logic here
    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;
