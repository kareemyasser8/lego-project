import "./ImageUploadInput.css"
import { FaCloudUploadAlt } from "react-icons/fa"
import noImage from "../../assets/no-image-placeholder.webp"

const ImageUploadInput = () => {
  return (
    <>
      <div className="d-flex flex-column col-12">
        <p>Upload your file below</p>
        <div className="img-input-container">
          <FaCloudUploadAlt className="FaCloudUploadAlt" />
          <div className="fw-bold">Drag your file here</div>
          <div>or</div>
          <div typeof="button" className="img-upload-btn mt-2">Browse</div>
        </div>
        <div className="uploaded-img-container flex-wrap">
            <div className="d-flex align-items-center flex-wrap gap-2">
            <img src={noImage} className="uploaded-img-preview"/>
                imageName.jpg
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
                <div className="uploaded-img-options text-primary">Edit</div> 
                <div className="uploaded-img-options text-danger">Delete</div> 
            </div>
        </div>
      </div>
    </>
  )
}

export default ImageUploadInput
