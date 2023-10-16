import axios, { CanceledError } from "axios"
import { useEffect, useState } from "react"

const Products = () => {
  const [Products, setProducts] = useState([])

  useEffect(() => {
    const controller = new AbortController()

    axios
      .get("http://localhost:3000/api/products", { signal: controller.signal })
      .then((res) => {
        setProducts(res.data.products)
        // console.log(res.data.products)
      })
      .catch(err=>{
        if(err instanceof CanceledError) return;
        console.log(err);
      })

    return () => controller.abort()
  }, [])

  return (
    <>
      {Products.map((p: any, index) => (
        <div key={index}>
          <p>{p.title}</p>
          <div style={{ height: "200px", width: "200px" }}>
            <img style={{ width: "100%" }} src={p.imageUrl} alt="" />
          </div>
          <p>{p.description}</p>
        </div>
      ))}
    </>
  )
}

export default Products
