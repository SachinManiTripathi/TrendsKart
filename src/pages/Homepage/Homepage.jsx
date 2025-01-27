import { Categories, TopProducts } from "../../assets/mockData";
import HomeBanner from "../../assets/images/HomeBanner.jpg"
import InfoSections from "../../components/InfoSection/InfoSections";
import FashionCategory from "../../components/FashionCategory/FashionCategory";
import { setProducts } from "../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Homepage() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
    useEffect(()=>{
        dispatch(setProducts(TopProducts));
    },[]);


  return (
    <div className="bg-white mt-2  px-4 md:px-16 lg:px-24 ">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
                <div className="w-full md:w-3/12 my-4.5 mr-10">
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">Shop By Categories</div>
                    <ul className="space-y-4 bg-gray-100 p-3 border">
                    {Categories.map((category,index)=>(
                        <li className=" flex items-center text-sm font-medium hover:bg-gray-200" key={index}>
                        <div className="w-2 h-2 border border-red-500 rounded-full mr-2 "></div>{category}</li>
                    ))}
                    </ul>
                </div>
                <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
                    <img src={HomeBanner} alt="Shopping Banner" className="h-full w-full"/>
                    <div className="absolute top-6 left-30">

                        <h2 className="text-3xl font-bold px-9">Welcome To <span className="underline">TrendsKart</span></h2>
                        <p className="text-xl mt-1 ml-30 font-bold"> Millions+ Products </p>
                        <button className="bg-red-600 mt-56 px-8 py-1.5 text-white mt-4 hover:bg-red-700
                                            transform transition-transform duration-300 hover:scale-105">SHOP NOW</button>
                    </div>
                </div>
               
                <div>
                </div>
                    
        </div>
        <InfoSections />

        <FashionCategory />
        <div>
            <h2>Top Products</h2>
            <div>
                {products?.products?.slice(0,5).map(((product,index)=>(
                    <div key={index}>{product.name}</div>
                )))}
            </div>
        </div>
    </div>
  )
}

export default Homepage;