import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from "react-icons/fa"

export const Categories = [
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Beauty",
    "Sports",
    "Automotive",
]


export const InfoItems =[
    {
        icon:<FaShippingFast className="text-3xl text-red-600" />,
        title:"Free Shipping",
        description:"Get your orders delivered with no extra cost",
    },
    {
        icon:<FaHeadset className="text-3xl text-red-600" />,
        title:"Support 24/7",
        description:"We are here to help you anytime",
    },
    {
        icon:<FaMoneyBillWave className="text-3xl text-red-600" />,
        title:"100% Money Back Gaurantee",
        description:"Full refund if you are not satisfied",
    },
    {
        icon:<FaLock className="text-3xl text-red-600" />,
        title:"Secure Payments",
        description:"Your payments details are safe with us",
    },
    {
        icon:<FaTag className="text-3xl text-red-600" />,
        title:"Discount",
        description:"Products with great discounts",
    },
]