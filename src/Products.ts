import ProductImg1 from "../src/assets/Product1.webp"
import ProductImg2 from "../src/assets/Product2.webp"
import ProductImg3 from "../src/assets/Product3.webp"
import ProductImg4 from "../src/assets/Product4.webp"
import ProductImg5 from "../src/assets/Product5.webp"
import ProductImg6 from "../src/assets/Product6.webp"
import ProductImg7 from "../src/assets/Product7.webp"
import ProductImg8 from "../src/assets/Product8.webp"

export interface Product {
  id?: number
  image?: string
  title: string
  rating: number
  price: number
  description?: string
  numInStock?: number
  images? : File[]
}

const products: Product[] = [
  {
    id: 1,
    image: ProductImg1,
    title: "The insect collection",
    rating: 4.5,
    price: 199.99,
  },
  { id: 2, image: ProductImg2, title: "Concorde", rating: 2, price: 79.99 },
  {
    id: 3,
    image: ProductImg3,
    title: "Corusant Gaurd Gunship",
    rating: 3.5,
    price: 199.99,
  },
  {
    id: 4,
    image: ProductImg4,
    title: "Lego Star Wars Calender 2023",
    rating: 1,
    price: 139.99,
  },
  {
    id: 5,
    image: ProductImg5,
    title: "Lego Magnifier Marvel",
    rating: 3.5,
    price: 20,
  },
  {
    id: 6,
    image: ProductImg6,
    title: "Gringotts Wizarding Bank- Collectors Edition",
    rating: 3.5,
    price: 44.99,
  },
  {
    id: 7,
    image: ProductImg7,
    title: "Lego City Advent Calender 2023",
    rating: 3.5,
    price: 20,
  },
  {
    id: 8,
    image: ProductImg8,
    title: "Hogwarts Castle and Grounds",
    rating: 3.5,
    price: 20,
  },
]

export default products
