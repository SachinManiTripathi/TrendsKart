import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from "react-icons/fa";
import MenCategory from '../../src/assets/images/MenCategory.jpg';
import WomenCategory from '../../src/assets/images/WomenCategory.jpg';
import KidsCategory from '../../src/assets/images/KidsCategory.jpg';

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

export const FashionCategories = [
    {
        title:"Men",
        imageURl: MenCategory,
    },
    {
        title:"Women",
        imageURl: WomenCategory,
    },
    {
        title:"Kids",
        imageURl: KidsCategory,
    },
]


export const TopProducts = [
    {
        id:1,
        imageURl:"",
        name:"Product 1",
        price:"Rs. 29.9"
    },
    {
        id:2,
        imageURl:"",
        name:"Product 2",
        price:"Rs. 29.9"
    },
    {
        id:3,
        imageURl:"",
        name:"Product 3",
        price:"Rs. 29.9"
    },
    {
        id:4,
        imageURl:"",
        name:"Product 4",
        price:"Rs. 29.9"
    },
    {
        id:5,
        imageURl:"",
        name:"Product 5",
        price:"Rs. 29.9"
    }
]