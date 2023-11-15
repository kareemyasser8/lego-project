import { z } from "zod"

const useImageValidation = () => {
  const MAX_FILE_SIZE = 1024 * 1024 * 5 //5MB
  const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
  ]

  const schema = z.object({
    title: z.string().min(1, { message: "Title field is required" }),
    price: z
      .number({ invalid_type_error: "Price field is required" })
      .min(1)
      .max(1000),
    rating: z.number(),
    images: z
      .any()
      .refine((files) => files?.length == 1, "Image is required.")
      .refine(
        (files) => files?.[0]?.size <= MAX_FILE_SIZE,
        `Max file size is 5MB.`
      )
      .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        ".jpg, .jpeg, .png and .webp files are accepted."
      ),
    description: z
      .string()
      .min(1, { message: "Description field is required" }),
    numInStock: z
      .number({ invalid_type_error: "Number in stock field is required" })
      .min(1)
      .max(1000),
  })

  return schema
}

export default useImageValidation
