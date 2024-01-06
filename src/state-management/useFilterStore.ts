import { create } from "zustand"
import produce from "immer"

export const queryType = ["price", "theme", "interest"]

export interface query {
  type: string
  value: string
}

export interface productQuery {
  price: string[] | null
  theme: string[] | null
  interest: string[] | null
}

interface FilterStore {
  filters: productQuery
  filterToBeRemoved: query
  changed: boolean
  addFilter: (query: query) => void
  removeFilter: (query: query) => void
  resetFilters: () => void
}

const useFilterStore = create<FilterStore>((set) => ({
  filters: { price: [], interest: [], theme: [] },
  filterToBeRemoved: { type: "", value: "" },
  changed: false,
  addFilter: (query: query) =>
    set(
      produce((draft: FilterStore) => {
        if (query.type === "price") {
          draft.filters.price?.push(query.value)
        } else if (query.type === "theme") {
          draft.filters.price?.push(query.value)
        } else if (query.type === "interest") {
          draft.filters.price?.push(query.value)
        }
        !draft.changed
      })
    ),
  // set((store) => ({
  //   filters: {...store.filters, ...filter},
  //   changed: !store.changed,
  // })),
  removeFilter: (query: query) => {
    set(
      produce((draft: FilterStore) => {
        if (query.type === "price") {
          draft.filters.price =
            draft.filters.price?.filter((item) => item !== query.value) ||
            []
        } else if (query.type === "theme") {
          draft.filters.theme =
            draft.filters.theme?.filter((item) => item !== query.value) ||
            []
        } else if (query.type === "interest") {
          draft.filters.interest =
            draft.filters.interest?.filter(
              (item) => item !== query.value
            ) || []
        }
        draft.filterToBeRemoved = query
        console.log("filter to be removed is : ", draft.filterToBeRemoved)
        !draft.changed
      })
    )
  },
  resetFilters: () =>
    set((store) => ({
      filters: {} as productQuery,
      filterToBeRemoved: {} as query,
      changed: !store.changed,
    })),
}))

export default useFilterStore
