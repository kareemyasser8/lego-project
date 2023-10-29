import { FieldValues, useForm } from 'react-hook-form';
import usePriceInput from '../../Hooks/usePriceInput';
import useRatingsInput from '../../Hooks/useRatingsInput';
import ImageUploadInput from '../ImageUploadInput/ImageUploadInput';
import ProductPreviewCard from '../ProductPreviewCard/ProductPreviewCard';

const EditProduct = () => {
  const { register, handleSubmit, setValue } = useForm()
  const handleRatingsInputField = useRatingsInput(0, 5)
  
  const handlePriceInputField = usePriceInput(0, 1000)
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <>
      <div className="col-12">
        <p className="h4">Edit Product</p>
        <div className="row">
          <div className="col-lg-7 col-sm-12 mb-3">
            <form className="lego-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="title">Title</label>
                <div className="input-container">
                  <input
                    {...register("name")}
                    autoComplete="off"
                    type="text"
                    id="title"
                    placeholder="Enter product title"
                  />
                </div>
                {/* <div className="input-error">ghalat yala</div> */}
              </div>

              <div className="mb-3">
                <label htmlFor="price">Price</label>
                <div className="input-container">
                  <input
                    {...register("price")}
                    autoComplete="off"
                    type="number"
                    id="price"
                    min={0}
                    max={1000}
                    onChange={handlePriceInputField}
                    placeholder="Price in $"
                  />
                </div>
                {/* <div className="input-error">ghalat yala</div> */}
              </div>

              <div className="mb-3">
                <label htmlFor="rating">Rating</label>
                <div className="input-container">
                  <input
                    {...register("ratings")}
                    autoComplete="off"
                    type="number"
                    id="rating"
                    min={0}
                    max={5}
                    onChange={handleRatingsInputField}
                    placeholder="Enter Product Rating"
                  />
                </div>
                {/* <div className="input-error">ghalat yala</div> */}
              </div>

              <div className="mb-3">
                <label htmlFor="rating">Images</label>
                <div className="input-container">
                  <ImageUploadInput imageOptions={{ ...register("image") }} />
                </div>
                {/* <div className="input-error">ghalat yala</div> */}
              </div>

              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <div className="input-container">
                  <textarea
                    {...register("description")}
                    autoComplete="off"
                    id="description"
                    placeholder="Enter Product Description"
                  />
                </div>
                {/* <div className="input-error">ghalat yala</div> */}
              </div>

              <div className="mb-3">
                <label htmlFor="numInStock">Number in stock</label>
                <div className="input-container">
                  <input
                    {...register("numInStock")}
                    autoComplete="off"
                    type="number"
                    id="numInStock"
                    min={0}
                    max={1000}
                    onChange={handlePriceInputField}
                    placeholder="The product amount"
                  />
                </div>
                {/* <div className="input-error">ghalat yala</div> */}
              </div>

              <button
                className="filledBlueBtn"
                style={{ width: "max-content" }}
              >
                Submit changes
              </button>
            </form>
          </div>
          <div className="col-lg-5 col-sm-12">
            <ProductPreviewCard />
          </div>
        </div>
      </div>
    </>
  )
}

export default EditProduct
