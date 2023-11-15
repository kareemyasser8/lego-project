import "./ImageUploadInput.css"
import { ChangeEvent, useRef } from "react"
import { FaCloudUploadAlt } from "react-icons/fa"
import useImageUploader from "../../Hooks/useImageUploader"
import { UseFormRegisterReturn } from "react-hook-form"
import { Product } from "../../Products"

interface Props {
  imageOptions?: UseFormRegisterReturn<"images">
  errors? : any
  handleChange: (event: ChangeEvent<HTMLInputElement>)=>void
  handleRemove: (file: File)=>void
  product: Product
}

const ImageUploadInput = ({ imageOptions, errors, handleChange, product, handleRemove}: Props) => {
  const wrapperRef = useRef<HTMLInputElement>(null)

  const {
    onDragEnter,
    onDragLeave,
    onDrop,
    onDragOver,
  } = useImageUploader(wrapperRef)


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChange(event);
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
              onChange={handleInputChange}
              accept="image/png,image/jpg,image/jpeg"
            />
            Browse
          </div>
        </div>

        {errors.images && (
          <div className="input-error">{errors.images.message}</div>
        )}

        {product.images?.map((file, index) => (
          <div key={index} className="uploaded-img-container flex-wrap">
            <div className="d-flex align-items-center flex-wrap gap-2">
              <img
                id={`uploaded-img-preview-${index}`}
                src={URL.createObjectURL(file)}
                className="uploaded-img-preview"
                alt="Preview"
              />
              <div className="w-100">{file.name}</div>
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              <div
                className="uploaded-img-options text-danger"
                onClick={() => handleRemove(file)}
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
