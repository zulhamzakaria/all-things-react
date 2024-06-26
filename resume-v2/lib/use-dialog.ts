import { create } from "zustand";

interface DialogState {
  isOpen: boolean;
}

interface DialogStore {
  dialogs: Record<string, DialogState>;
  onOpen: (id: string) => void;
  onClose: (id: string) => void;
}

export const useDialog = create<DialogStore>((set) => ({
  dialogs: {},
  onOpen: (id) =>
    set((state) => ({
      dialogs: {
        ...state.dialogs,
        [id]: { ...(state.dialogs[id] || {}), isOpen: true },
      },
    })),
  onClose: (id) =>
    set((state) => ({
      dialogs: {
        ...state.dialogs,
        [id]: { ...(state.dialogs[id] || {}), isOpen: false },
      },
    })),
}));

type EditDialogItemId = {
  userId: string;
  itemId: string;
};

export const EditDialogItemIdStore = create<EditDialogItemId>((set) => ({
  userId: "",
  itemId: "",
  setUserId: (userId: string) => {
    set({ userId });
  },
  setItemId: (itemId: string) => {
    set({ itemId });
  },
}));

// interface DialogProps {
//   isOpen: boolean;
//   onOpen: () => void;
//   onClose: () => void;
//   data: any;
//   setData(data: any): void;
// }

// export const useDialog = create<DialogProps>((set) => ({
//   isOpen: false,
//   onOpen: () => set({ isOpen: true }),
//   onClose: () => set({ isOpen: false }),
//   data: {},
//   setData: (data) => set({ data: { data } }),
// }));
