import { create } from "zustand"

interface FilterStore {
  filters: string[]
  removedFilter: string
  changed: boolean
  addFilter: (filter: string) => void
  removeFilter: (filter: string) => void
  resetFilters: () => void
}

const useFilterStore = create<FilterStore>((set) => ({
  filters: [],
  removedFilter: "",
  changed: false,
  addFilter: (filter) =>
    set((store) => ({ filters: [...store.filters, filter] })),
  removeFilter: (filter) => {
    set((store) => ({
      filters: store.filters.filter((f) => f !== filter),
      removedFilter: filter,
      changed: !store.changed,
    }))
    // console.log("removed filter is: ", filter)
  },
  resetFilters: () =>
    set((store) => ({
      filters: [],
      removedFilter: "all",
      changed: !store.changed,
    })),
}))

export default useFilterStore
