import { items } from '#/lib/items';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ItemsStore {
  items: boolean[];
  setActive: (index: number, active: boolean) => void;

  getActivity: (index: number) => boolean;
}

const useItemStore = create<ItemsStore>()(
  devtools(
    (set, get) => ({
      items: Array(items.length).fill(false),

      setActive(index, active) {
        return set((state) => {
          const newItems = [...state.items];
          newItems[index] = active;

          return { ...state, items: newItems };
        });
      },

      getActivity(index) {
        return get().items[index];
      },
    }),
    {
      name: 'item-store',
    },
  ),
);

export default useItemStore;
