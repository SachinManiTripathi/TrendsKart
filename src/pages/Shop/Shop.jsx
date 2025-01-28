import { useSelector } from "react-redux"
import ProductCard from "../../components/ProductCard/ProductCard"


function Shop() {

    const products = useSelector(state=>state.product)
  return (
    <div className="mx-auto py-12">
    <h2 className="text-3xl flex justify-center mb-10 font-semibold">Shop</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products?.products?.slice(0,5).map(((product,index)=>(
            <ProductCard product={product} key={index} />
        )))}
    </div>
</div>
  )
}

export default Shop