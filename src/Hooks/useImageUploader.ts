import { ChangeEvent, RefObject, useState } from "react"

const useImageUploader = (ref: RefObject<HTMLInputElement>) => {
  const [imgfileList, setImgFileList] = useState<File[]>([])

  const onDragEnter = () => {
    ref.current?.classList.add("dragover")
  }

  const onDragLeave = () => {
    ref.current?.classList.remove("dragover")
  }
  const onDrop = () => {
    ref.current?.classList.remove("dragover")
  }

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const onFileDrop = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.target.files) {
      const newFile = event.target.files[0]
      const updatedList = [...imgfileList, newFile]
      setImgFileList(updatedList)
  
    }
  }

  const fileRemove = (file: File) => {
    console.log("clicked")

    const updatedList = imgfileList.filter((f) => f !== file)
    setImgFileList(updatedList)
  }

  return{
    onDragEnter,
    onDragLeave,
    onDrop,
    onDragOver,
    onFileDrop,
    fileRemove,
    imgfileList,
  }
}

export default useImageUploader
