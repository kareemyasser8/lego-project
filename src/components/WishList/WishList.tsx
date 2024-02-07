import "./WishList.css"
import ProductInWishList from "../ProductInWishList/ProductInWishList"
import useProductsInWishList from "../../Hooks/useProductsInWishList"
import EmptyCartOrWishList from "../EmptyCartOrWishlist/EmptyCartOrWishList"

const WishList = () => {
  let id = localStorage.getItem('wishListId')
  const {data, isLoading, error} = useProductsInWishList(id || "");

  if (data && data?.WishList_Products.length == 0) {
    return <EmptyCartOrWishList type="WishList" />
  }

  return (
    <div className="col-12">
      <p className="h4">Wish List</p>
      <div className="productsInWishList-container mb-4">
        {data?.WishList_Products.map((value: any,index: number)=>
          <ProductInWishList 
            key={index}
            productTitle={value?.Product.title}
            lastUpdate={value?.createdAt}
            img={value?.Product.Images[0].url || ""}
            productId = {value?.Product.id}
          />
        )}
      </div>
    </div>
  )
}

export default WishList
