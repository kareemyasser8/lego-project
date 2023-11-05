import { ChangeEvent, FormEvent, useState } from "react"
import ProductPreviewCard from "../ProductPreviewCard/ProductPreviewCard"
import { Product } from "../../Products"
import usePriceInput from "../../Hooks/usePriceInput"
import useRatingsInput from "../../Hooks/useRatingsInput"
import { FieldValues, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import ImageUploadInput from "../ImageUploadInput/ImageUploadInput"
                
const MAX_FILE_SIZE = 1024 * 1024 * 5; //5MB
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
  description: z.string().min(1, { message: "Description field is required" }),
  numInStock: z
    .number({ invalid_type_error: "Number in stock field is required" })
    .min(1)
    .max(1000),
})

const EditProduct = () => {
  const [product, setProduct] = useState<Product>({
    title: "",
    price: +"",
    rating: +"",
    images: [],
    description: "",
    numInStock: +"",
  })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const handlePriceInputField = usePriceInput(0, 1000)
  const handleRatingsInputField = useRatingsInput(0, 5)

  const handleImagesUpload = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.target.files) {
      const image = event.target.files[0]
      // setProduct({...product,images: image});
      setProduct({
        ...product,
        images: [...(product.images || []), image],
      })
      console.log(product)
    }
  }

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    console.log(product.images)
    console.log("The errors are: ", errors)
  }

  return (
    <>
      <div className="col-12">
        <p className="h4">Edit Product</p>
        <div className="row">
          <div className="col-lg-7 col-sm-12 mb-3">
            <form className="lego-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="title">Title</label>
                <div className="input-container">
                  <input
                    autoComplete="off"
                    {...register("title")}
                    className={errors?.title ? `input-danger` : `input`}
                    onChange={(event) => {
                      setValue("title", event.target.value)
                      setProduct({ ...product, title: event.target.value })
                      trigger("title")
                    }}
                    value={product.title}
                    type="text"
                    id="title"
                    placeholder="Enter product title"
                  />
                </div>
                {errors.title && (
                  <div className="input-error">{errors.title.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="price">Price</label>
                <div className="input-container">
                  <input
                    autoComplete="off"
                    {...register("price", { valueAsNumber: true })}
                    className={errors?.price ? `input-danger` : `input`}
                    type="number"
                    step="any"
                    id="price"
                    min={0}
                    max={1000}
                    onChange={(event) => {
                      handlePriceInputField(event)
                      setProduct({ ...product, price: +event.target.value })
                      setValue("price", +event.target.value)
                      trigger("price")
                    }}
                    placeholder="Price in $"
                  />
                </div>
                {errors.price && (
                  <div className="input-error">{errors.price.message}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="rating">Rating</label>
                <div className="input-container">
                  <input
                    autoComplete="off"
                    type="number"
                    {...register("rating", { valueAsNumber: true })}
                    id="rating"
                    step="any"
                    min={0}
                    max={5}
                    onChange={(event) => {
                      handleRatingsInputField(event)
                      setProduct({ ...product, rating: +event.target.value })
                    }}
                    placeholder="Enter Product Rating"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="rating">Images</label>
                <div className="input-container">
                  <ImageUploadInput 
                    imageOptions={{ ...register("images") }}
                    errors={errors}
                    handlechange= {handleImagesUpload}
                    />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <div className="input-container">
                  <textarea
                    autoComplete="off"
                    className={errors?.description ? `input-danger` : `input`}
                    id="description"
                    {...register("description")}
                    onChange={(event) => {
                      setProduct({
                        ...product,
                        description: event.target.value,
                      })
                      setValue("description", event.target.value)
                      trigger("description")
                    }}
                    placeholder="Enter Product Description"
                  />
                </div>
                {errors.description && (
                  <div className="input-error">
                    {errors.description.message}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="numInStock">Number in stock</label>
                <div className="input-container">
                  <input
                    autoComplete="off"
                    className={errors?.numInStock ? `input-danger` : `input`}
                    type="number"
                    id="numInStock"
                    {...register("numInStock", { valueAsNumber: true })}
                    min={0}
                    max={1000}
                    onChange={(event) => {
                      setProduct({
                        ...product,
                        numInStock: +event.target.value,
                      })
                      setValue("numInStock", +event.target.value)
                      trigger("numInStock")
                    }}
                    placeholder="The product amount"
                  />
                </div>
                {errors.numInStock && (
                  <div className="input-error">{errors.numInStock.message}</div>
                )}
              </div>

              <button
                className="filledBlueBtn"
                style={{ width: "max-content" }}
              >
                Submit changes
              </button>
            </form>
          </div>
          <div className="col-lg-5 col-sm-12">
            <ProductPreviewCard data={product} />
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProduct
