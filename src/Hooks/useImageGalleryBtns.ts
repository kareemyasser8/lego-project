import { useState } from "react"

const useImageGalleryBtns = (numOfImages: number) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0)

    const handleNextImg = () => {
      if (currentImgIndex + 1 > numOfImages - 1) return
      setCurrentImgIndex(currentImgIndex + 1)
    }
  
    const handlePrevImg = () => {
      if (currentImgIndex - 1 < 0) return
      setCurrentImgIndex(currentImgIndex - 1)
    }

    return{
        setCurrentImgIndex,
        currentImgIndex,
        handleNextImg,
        handlePrevImg
    }

}

export default useImageGalleryBtns