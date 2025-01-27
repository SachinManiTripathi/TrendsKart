import { FashionCategories } from "../../assets/mockData"

FashionCategories

function FashionCategory() {
  return (
    <>
    <h2 className="flex items-center justify-center text-4xl mb-8">Season of Fashion Sale</h2>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
        {FashionCategories.map((category,index)=>(
            <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                <img src={category.imageURl} alt="Fashion Category" className="w-full h-full object-cover rounded-lg shadow-md"/>
                <div className="absolute top-10 left-5">
                    <p className="text-xl font-bold">{category.title}</p>
                    <p className="text-grey-600">View All</p>
                </div>

            </div>

        ))}
    </div>
    </>

   
  )
}

export default FashionCategory