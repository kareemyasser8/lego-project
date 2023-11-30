import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useParams } from "react-router-dom"
import { z } from "zod"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";

import {
  usePriceInput,
  useProductValidation,
  useRatingsInput,
  useAddProduct,
  useSingleProduct,
} from "../../Hooks"

import useProductStore from "../../state-management/useProductStore"
import ImageUploadInput from "../ImageUploadInput/ImageUploadInput"
import { useEffect, useState } from "react"
import ProductPreviewCard from "../ProductPreviewCard/ProductPreviewCard"
import { APILink } from "../../constants/APILink"
import useEditProduct from "../../Hooks/useEditProduct"
import { useQueryClient } from "@tanstack/react-query"

const schema = useProductValidation()
export type ProductFormData = z.infer<typeof schema>

const EditProduct = () => {
  const { id } = useParams()
  let mode = id ? "edit" : "create"
  const queryClient = useQueryClient()
  const navigate = useNavigate();

  const {
    product,
    updateID,
    resetProduct,
    updateDescription,
    updateNumInStock,
    updatePrice,
    updateRating,
    updateImages,
    updateTitle,
  } = useProductStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    trigger,
    reset,
  } = useForm<ProductFormData>({ resolver: zodResolver(schema) })

  const {
    mutate: addProductMutate,
    isLoading: addProductLoading,
    error: addProductError,
    isSuccess: addProductSuccess,
  } = useAddProduct()

  const {
    mutate: editProductMutate,
    isLoading: editProductLoading,
    error: editProductError,
    isSuccess: editProductSuccess,
  } = useEditProduct()

  let singleProductData: any

  if (id) {
    ({ data: singleProductData } = useSingleProduct(id))
  }

  useEffect(() => {
    if (mode == "edit" && singleProductData) {
      // console.log(singleProductData)

      singleProductData.Images.forEach((image: any) => {
        updateImages(APILink + "/" + image.url)
      })

      updateID(singleProductData.id)

      updateDescription(singleProductData.description)
      updateNumInStock(singleProductData.numInStock)
      updatePrice(singleProductData.price)
      updateRating(singleProductData.rating)
      updateTitle(singleProductData.title)

      setValue("title", singleProductData.title)
      setValue("price", singleProductData.price)
      setValue("rating", singleProductData.rating)
      setValue("description", singleProductData.description)
      setValue("images", singleProductData.images)
      setValue("numInStock", singleProductData.numInStock)
    }

    return () => {
      resetProduct()
      reset()
    }
  }, [id, mode, singleProductData])

  useEffect(() => {
    if (addProductSuccess) {
      queryClient.invalidateQueries(["products"])
      queryClient.invalidateQueries(["product"])
      resetProduct()
      reset()
      navigate('/user/products')
      window.scrollTo(0, 0);
      toast.success("Product added successfully")
    }

    if (editProductSuccess) {
      queryClient.invalidateQueries(["products"])
      queryClient.invalidateQueries(["product"])
      resetProduct()
      reset()
      navigate('/user/products')
      window.scrollTo(0, 0);
      toast.success("Product edited successfully")
    }
  }, [addProductSuccess, editProductSuccess])

  const handlePriceInputField = usePriceInput(0, 1000)
  const handleRatingsInputField = useRatingsInput(0, 5)

  const onSubmit = () => {
    const formData = new FormData()
    formData.append("title", product.title)
    formData.append("price", product.price.toString())
    formData.append("rating", product.rating.toString())
    if (product.description) formData.append("description", product.description)
    if (product.numInStock)
      formData.append("numInStock", product.numInStock.toString())

    if (product.images) {
      product.images.forEach((image) => {
        if (image.file) formData.append("images", image.file)

        formData.append("previews[]", image.preview)

        if (image.imgTitle) formData.append("imgTitles[]", image.imgTitle)
        // formData.append("images", image.preview)
      })
    }

    if (product.id) {
      formData.append("id", product.id.toString());
    }

    if (mode == "create") {
      addProductMutate(formData)
    } else {
      // console.log(formData.get("images"))
      // console.log(formData.get("previews[]"))
      editProductMutate(formData)
    }
  }

  return (
    <>
      <div className="col-12">
        {(addProductError || editProductError) && (
          <div className="alert alert-danger">
            {addProductError?.message || editProductError?.message}
          </div>
        )}
        <p className="h4">
          {mode == "create" ? "Create Product" : "Edit Product"}
        </p>
        <div className="row">
          <div className="col-lg-7 col-sm-12 mb-3">
            <form
              className="lego-form"
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="mb-3">
                <label htmlFor="title">Title</label>
                <div className="input-container">
                  <input
                    autoComplete="off"
                    {...register("title")}
                    className={errors?.title ? `input-danger` : `input`}
                    onChange={(event) => {
                      updateTitle(event.target.value)
                      setValue("title", event.target.value)
                      trigger("title")
                    }}
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
                      updatePrice(+event.target.value)
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
                      updateRating(+event.target.value)
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
                    setValue={setValue}
                    trigger={trigger}
                    getValues={getValues}
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
                      updateDescription(event.target.value)
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
                      updateNumInStock(+event.target.value)
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
                className={
                  addProductLoading || editProductLoading
                    ? "loadingBlueBtn"
                    : "filledBlueBtn"
                }
                disabled={addProductLoading || editProductLoading}
                style={{ width: "max-content" }}
              >
                {addProductLoading || editProductLoading
                  ? "Adding..."
                  : "Submit changes"}
              </button>
            </form>
          </div>
          <div className="col-lg-5 col-sm-12">
            <ProductPreviewCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProduct
