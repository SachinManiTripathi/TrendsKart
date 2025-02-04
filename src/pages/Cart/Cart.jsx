import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../../assets/images/EmptyCart.jpg';
import { FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import ChangeAddress from '../../components/ChangeAddress/ChangeAddress';
import  {removeFromCart, increaseQuantity, decreaseQuantity}  from '../../redux/cartSlice';


function Cart() {
    const cart = useSelector(state=>state.cart);
    const [address,setAddress] = useState("main street,0012");
    const [isModalOpen,setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
  return (
      
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
        {cart.products.length >0 ?(
          <div>
            <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
              <div className='md:w-2/3'>
              <div className='flex justify-between border-b pb-2 items-center mb-4 text-xs font-bold'>
                <p>PRODUCTS</p>
                <div className='flex space-x-8'>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>
              
              <div>
                {cart.products.map((product)=>(
                  <div key={product.id} className='flex items-center justify-between p-3 shadow-sm'>
                    <div className='md:flex items-center space-x-4' >
                      <img src={product.image} alt={product.name}
                            className='w-16 h-16 object-contain rounded' />
                      <div className='flex-1 ml-4'>
                        <h3 className='text-lg font-semibold'>{product.name}</h3>
                      </div>
                    </div>
                    <div className='flex space-x-12 items-center'>
                      <p>${product.price}</p>
                      
                      <div className='flex items-center justify-center border border-gray'>
                        <button onClick={()=>dispatch(decreaseQuantity(product.id))} className='text-xl font-bold px-1.5 border-1 border-gray'>-</button>
                        <p className='text-xl px-2'>{product.quantity}</p>
                        <button onClick={()=>dispatch(increaseQuantity(product.id))} className='text-xl font-bold px-1 border-1 border-gray'>+</button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button onClick={() =>dispatch(removeFromCart(product.id))} className='text-red-500 hover:text-red-700'>
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              </div>
              <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-lg '>
                <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
                <div className='flex justify-between mb-5  p-1  shadow-sm'>
                  <span className='text-sm'>Total Items:</span>
                  <span>{cart.totalQuantity}</span>
                </div>
                <div className='mb-4 p-1 shadow-sm'>
                  <p>Shipping Address:</p>
                  <p className='ml-2'>Shipping to: {""}</p>
                  <span className='text-xs ml-2 font-bold'>{address}</span>
                  <button onClick={()=>setIsModalOpen(true)} className='text-blue-500 hover:underline mt-1 ml-2'>Change Address</button>
                </div>
                <div className='flex justify-between mb-4 p-1 shadow-sm'>
                  <span>Total Price:</span>
                  <span>{cart.totalPrice}</span>
                </div>
                <button className='w-full bg-red-600 text-white py-2 hover:bg-red-800 shadow-sm'>Proceed To Checkout</button>
                

              </div>
            </div>
            <Modal  isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen} > <ChangeAddress setAddress={setAddress} setIsModalOpen={setIsModalOpen} /></Modal>
          </div>):(
           <div className='flex justify-center'>
            <img src={EmptyCart} alt="Empty cart" className="h-96"/>
          </div>
          ) }
    </div>
  )
}

export default Cart