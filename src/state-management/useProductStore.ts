import { Product, ProductImage } from "../Products"
import { create } from "zustand"

interface ProductStore {
  product: Product
  updateID: (id: string) => void,
  updateTitle: (title: string) => void
  updatePrice: (price: number) => void
  updateRating: (rating: number) => void
  updateImages: (image: File | string) => void
  removeImage: (image: ProductImage) => void
  updateDescription: (description: string) => void
  updateNumInStock: (numInStock: number) => void
  resetProduct: () => void
}

const useProductStore = create<ProductStore>((set) => ({
  product: {
    id: "",
    title: "",
    price: +"",
    rating: +"",
    images: [],
    description: ``,
    numInStock: +"",
  },
  updateID: (id)=>
    set((state)=>({product: {...state.product, id: id}})),
  updateTitle: (title) =>
    set((state) => ({ product: { ...state.product, title: title } })),
  updatePrice: (price) =>
    set((state) => ({ product: { ...state.product, price: price } })),
  updateRating: (rating) =>
    set((state) => ({ product: { ...state.product, rating: rating } })),
  updateImages: (imgInput) => {
    const productImage: ProductImage = createProductImageFromInput(imgInput);
    set((state) => ({
      product: {
        ...state.product,
        images: [...state.product.images, productImage],
      },
    }))
  },
  removeImage: (image) =>
    set((state) => ({
      product: {
        ...state.product,
        images: state.product.images.filter((img) => img !== image),
      },
    })),
  updateDescription: (description) =>
    set((state) => ({
      product: { ...state.product, description: description },
    })),
  updateNumInStock: (numInStock) =>
    set((state) => ({ product: { ...state.product, numInStock: numInStock } })),
  resetProduct: () =>
    set(() => ({
      product: {
        id: "",
        title: "",
        price: +"",
        rating: +"",
        images: [],
        description: ``,
        numInStock: +"",
      },
    })),
}))

export default useProductStore


const createProductImageFromInput = (imgInput: File | string): ProductImage => {
  let image: ProductImage = {
    file: null,
    preview: "",
  };

  if (imgInput instanceof File) {
    image = {
      imgTitle: imgInput.name,
      file: imgInput,
      preview: URL.createObjectURL(imgInput),
    };
  } else {
    image = {
      file: null,
      preview: imgInput,
    };
  }

  return image;
};
