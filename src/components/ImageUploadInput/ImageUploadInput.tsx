import "./ImageUploadInput.css"
import { FaCloudUploadAlt } from "react-icons/fa"
import noImage from "../../assets/no-image-placeholder.webp"
import { useRef } from "react"
import useImageUploader from "../../Hooks/useImageUploader"

const ImageUploadInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const imageThumbnailRef = useRef<HTMLImageElement>(null)
  const {
    handleBrowseClick,
    handleFileSelect,
    handleFileUpload,
    imgFiles,
    isLoading,
  } = useImageUploader(inputRef)

  return (
    <>
      <div className="d-flex flex-column col-12">
        <p>Upload your file below</p>
        <div className="img-input-container">
          <FaCloudUploadAlt className="FaCloudUploadAlt" />
          <div className="fw-bold">Drag your file here</div>
          <div>or</div>
          <div
            typeof="button"
            className="img-upload-btn mt-2"
            onClick={handleBrowseClick}
          >
            <input
              type="file"
              ref={inputRef}
              onChange={handleFileSelect}
              hidden
            />
            Browse
          </div>
        </div>

        {isLoading && <div>Loading...</div>}

        {imgFiles.map((file, index) => (
          <div key={index} className="uploaded-img-container flex-wrap">
            <div className="d-flex align-items-center flex-wrap gap-2">
              <img
                id={`uploaded-img-preview-${index}`}
                ref={imageThumbnailRef}
                src={URL.createObjectURL(file)}
                className="uploaded-img-preview"
                alt="Preview"
              />
              {file.name}
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              <div className="uploaded-img-options text-primary">Edit</div>
              <div className="uploaded-img-options text-danger">Delete</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ImageUploadInput
