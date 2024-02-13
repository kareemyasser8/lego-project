import { z } from "zod"

const useProductValidation = () => {
  const MAX_FILE_SIZE = 1024 * 1024 * 5 //5MB
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ]

  const imageSchema = z.object({
    name: z.string(),
    size: z.number(),
    type: z.string().refine((value) => ACCEPTED_IMAGE_TYPES.includes(value)),
  });

  const schema = z.object({
    title: z.string().min(1, { message: "Title field is required" }),
    price: z.number({
      invalid_type_error: "Price field is required",
    }).min(1).max(1000),
    rating: z.number(),
    images: z.any(),
    description: z.string().min(1, { message: "Description field is required" }),
    numInStock: z.number({
      invalid_type_error: "Number in stock field is required",
    }).min(1).max(1000),
  });
  return schema
}

export default useProductValidation
