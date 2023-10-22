import './ImageUploadInput.css';
import { useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

import useImageUploader from '../../Hooks/useImageUploader';

const ImageUploadInput = () => {
  const wrapperRef = useRef<HTMLInputElement>(null)

  const {
    onDragEnter,
    onDragLeave,
    onDrop,
    onDragOver,
    onFileDrop,
    fileRemove,
    imgfileList,
  } = useImageUploader(wrapperRef)

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
          onDragOver={onDragOver} // Add this line
        >
          <FaCloudUploadAlt className="FaCloudUploadAlt" />
          <div className="fw-bold">Drag your file here</div>
          <div>or</div>
          <div typeof="button" className="img-upload-btn mt-2">
            <input type="file" onChange={onFileDrop} />
            Browse
          </div>
        </div>

        {imgfileList.map((file, index) => (
          <div key={index} className="uploaded-img-container flex-wrap">
            <div className="d-flex align-items-center flex-wrap gap-2">
              <img
                id={`uploaded-img-preview-${index}`}
                src={URL.createObjectURL(file)}
                className="uploaded-img-preview"
                alt="Preview"
              />
              {file.name}
            </div>
            <div className="d-flex align-items-center flex-wrap gap-2">
              <div
                className="uploaded-img-options text-danger"
                onClick={() => fileRemove(file)}
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
