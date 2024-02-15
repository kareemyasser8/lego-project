import React, { useEffect, useState } from "react"
import "./ImageInputURL.css"
import { FaPlus } from "react-icons/fa"
import { RiDeleteBin2Line } from "react-icons/ri"
import useProductStore from "../../state-management/useProductStore"

const ImageInputURL = () => {
  const { product, updateImages, removeImage } = useProductStore()
//   const [imageUrls, setImageUrls] = useState([""])

//   useEffect(() => {
//     console.log(imageUrls);
//   }, [imageUrls]);

//   const handleAddUrl = () => {
//     setImageUrls([...imageUrls, ""])
//   }

//   const handleRemoveUrl = (key: number) => {
//     console.log("key to remove: ", key);
//     const newUrls = [...imageUrls];
//     newUrls.splice(key, 1);
//     setImageUrls(newUrls);
//   }

//   const setImgUrlValue = (value: string, selectedIndex: number)=>{
//     const newUrls = imageUrls.map((url,index)=>
//         (index === selectedIndex )? value : url
//     )
//     setImageUrls(newUrls);
//   }

  const inputs = product.images.map((url, index) => (
    <div className="ImageURLInput__InputField" key={index}>
      <input
        autoComplete="off"
        type="text"
        id={`imageUrl-${index}`}
        placeholder="Enter Image URL"
        onChange={(event)=>{
            // setImgUrlValue(event.target.value, index)
        }}
      />
      <div className="butn btn--secondary">
        <FaPlus />
      </div>
      <div className="butn btn--red">
        <RiDeleteBin2Line />
      </div>
    </div>
  ))

  return (
    <>
      <div className="ImageURLInputContainer">
        <div className="ImageURLInputContainer__urls">{inputs}</div>
        <div className="ImageURLInputContainer__previews"></div>
      </div>
    </>
  )
}

export default ImageInputURL
