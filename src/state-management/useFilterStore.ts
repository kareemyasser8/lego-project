import { create } from "zustand"

export interface productQuery {
  price: string | null
  theme: string | null
  interest: string | null
}

interface FilterStore {
  filters: productQuery
  removedFilter: productQuery
  changed: boolean
  addFilter: (filter: productQuery) => void;
  removeFilter: (filter: productQuery) => void;
  resetFilters: () => void
}

const useFilterStore = create<FilterStore>((set) => ({
  filters: {} as productQuery,
  removedFilter: {} as productQuery,
  changed: false,
  addFilter: (filter: productQuery) =>
    set((store) => ({
      filters: {...store.filters, ...filter},
      changed: !store.changed,
    })),
  removeFilter: (filter: productQuery) => {
    set((store) => ({
      filters: {
        price: store.filters.price !== filter.price ? store.filters.price : null,
        theme: store.filters.theme !== filter.theme ? store.filters.theme : null,
        interest: store.filters.interest !== filter.interest ? store.filters.interest : null,
      },
      removedFilter: filter,
      changed: !store.changed,
    }));
    // console.log("removed filter is: ", filter)
  },
  resetFilters: () =>
    set((store) => ({
      filters: {} as productQuery,
      removedFilter: {} as productQuery,
      changed: !store.changed,
    })),
}))

export default useFilterStore
