import { RefObject } from 'react';

const useImageUploader = (ref: RefObject<HTMLInputElement>) => {

  const onDragEnter = () => {
    ref.current?.classList.add("dragover")
  }

  const onDragLeave = () => {
    ref.current?.classList.remove("dragover")
  }

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    ref.current?.classList.remove("dragover")
  }

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  return {
    onDragEnter,
    onDragLeave,
    onDrop,
    onDragOver,
  }
}

export default useImageUploader
