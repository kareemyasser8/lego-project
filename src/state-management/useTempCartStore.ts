import { create } from "zustand"

interface TempCartStore {
  temporaryCartId: string | null
  setTempCart: (id: string) => void
}

const useTempCartStore = create<TempCartStore>((set) => ({
  temporaryCartId: localStorage.getItem('temporaryCartId'),
  setTempCart: (id) => set(() => ({ temporaryCartId: id })),
}))

export default useTempCartStore;

