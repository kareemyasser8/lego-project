import "./ImageUploadInput.css"
import { ChangeEvent, useRef } from "react"
import { FaCloudUploadAlt } from "react-icons/fa"
import useImageUploader from "../../Hooks/useImageUploader"
import { FieldErrors, UseFormGetValues, UseFormRegisterReturn, UseFormSetValue, UseFormTrigger } from "react-hook-form"
import useProductStore from "../../state-management/useProductStore"

interface ProductFormInput {
  images?: any;
  title: string;
  price: number;
  rating: number;
  description: string;
  numInStock: number;
}
interface Props {
  imageOptions?: UseFormRegisterReturn<"images">
  errors?: FieldErrors<ProductFormInput>
  setValue: UseFormSetValue<ProductFormInput>,
  trigger: UseFormTrigger<ProductFormInput>,
  getValues: UseFormGetValues<ProductFormInput>
}

const ImageUploadInput = ({ imageOptions, errors, setValue, trigger, getValues }: Props) => {
  const wrapperRef = useRef<HTMLInputElement>(null)

  const { product, updateImages, removeImage } = useProductStore()

  const { onDragEnter, onDragLeave, onDrop, onDragOver } =
    useImageUploader(wrapperRef)

  const handleImagesUpload = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.target.files) {
      const image = event.target.files[0]
      updateImages(image)
      setValue("images", [...product.images, image]);
      trigger("images")
      // console.log("Updated form values:", getValues());
    }
  }

  return (
    <>
      <div className="d-flex flex-column col-12">
        <p>Upload your file below</p>
        <div
          ref={wrapperRef}
          className="img-input-container"
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onDragOver={onDragOver}
        >
          <FaCloudUploadAlt className="FaCloudUploadAlt" />
          <div className="fw-bold">Drag your file here</div>
          <div>or</div>
          <div typeof="button" className="img-upload-btn mt-2">
            <input
              {...imageOptions}
              type="file"
              onChange={handleImagesUpload}
              accept="image/png,image/jpg,image/jpeg"

            />
            Browse
          </div>
        </div>

        {errors?.images && (
          <div className="input-error">{errors.images.message as string}</div>
        )}

        {product.images?.map((img, index) => (
          <div key={index} className="uploaded-img-container flex-wrap">
            <div className="d-flex align-items-center flex-wrap gap-2">
              <img
                id={`uploaded-img-preview-${index}`}
                src={img.preview ? img.preview : ""}
                className="uploaded-img-preview"
                alt="Preview"
              />
              <div className="w-100">{img.imgTitle}</div>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              <div
                className="uploaded-img-options text-danger"
                onClick={() => {
                  removeImage(img)
                  // setValue("images", product.images.filter(i=> i != file))
                  trigger("images")
                }}
              >
                Delete
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ImageUploadInput
