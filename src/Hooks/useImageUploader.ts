import { ChangeEvent, RefObject, useReducer, useState } from "react"
import imgListReducer, {
  ImageAction,
} from "../state-management/reducers/imgListReducer"

const useImageUploader = (ref: RefObject<HTMLInputElement>) => {
  const [files, dispatch] = useReducer(imgListReducer, [])

  const onDragEnter = () => {
    ref.current?.classList.add("dragover")
  }

  const onDragLeave = () => {
    ref.current?.classList.remove("dragover")
  }

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    ref.current?.classList.remove("dragover")
    // const droppedFiles = event.dataTransfer?.files;
    // if (droppedFiles) {
    //   const chosenFiles = Array.from(droppedFiles);
    //   dispatch({ type: "ADD", files: chosenFiles });
    // }
  }

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  // const onImagePicked = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault()
  //   if (event.target.files) {
  //     const file = event.target.files[0]
  //     console.log("the file size is " + file.size);
  //     console.log(file);
  //   }

  //   // if (event.target.files) {
  //   //   const chosenFiles = Array.from(event.target.files);
  //   //   dispatch({ type: "ADD", files: chosenFiles });
  //   // }
  // }

  // const fileRemove = (file: File) => {
  //   // dispatch({ type: "REMOVE", file: file });
  //   // console.log(files);
  // }

  return {
    onDragEnter,
    onDragLeave,
    onDrop,
    onDragOver,
    // onImagePicked,
    // fileRemove,
  }
}

export default useImageUploader
