import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";




function Checkout() {
    const [billingToggle,setBillingToggle] = useState(true);
    const [shippingToggle,setShippingToggle] = useState(true);
    const [paymentToggle,setPaymentToggle] = useState(true);
    const [paymentMethod,setPaymentMethod] = useState(false);

    const cart = useSelector(state=>state.cart);
  return (
      
    <div className='container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24'>
          
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
              <div className='md:w-2/3'>
              <div className="border p-3 mb-3">
                  <div onClick={()=> setBillingToggle(!billingToggle)} className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                    {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                  </div>

                <div className={`space-y-4 ${billingToggle ?"":"hidden"} `}>
                  <div>
                      <label className='block text-gray-700' htmlFor=''>Name</label>
                      <input type="text" 
                         name="name" 
                         placeholder="Enter Name" 
                        className='w-full px-3 py-2 border-1 border-gray-300'
                      />
                  </div>
               
                  <div>
                      <div>
                        <label className='block text-gray-700' htmlFor=''>Email</label>
                        <input type="email" name="email" 
                              placeholder="Enter Email" 
                                className='w-full px-3 py-2 border-1 border-gray-300'
                              />
                        </div>
                  </div>
                  <div>
                      <div>
                        <label className='block text-gray-700' htmlFor=''>Phone</label>
                        <input type="text"
                              name="phone"
                              placeholder='Enter Phone Number'
                              className='w-full px-3 py-2 border-1 border-gray-300' />
                    </div>
                  </div>
              </div>
              </div>
              <div className="border p-3 mb-3">
              <div onClick={()=> setShippingToggle(!shippingToggle)} className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                    {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                  </div>

                <div className={`space-y-4 ${shippingToggle ?"":"hidden"} `}>
                  <div>
                      <label className='block text-gray-700' htmlFor=''>Address</label>
                      <input type="text" 
                         name="Address" 
                         placeholder="Enter Address" 
                        className='w-full px-3 py-2 border-1 border-gray-300'
                      />
                  </div>
               
                  <div>
                      <div>
                        <label className='block text-gray-700' htmlFor=''>City</label>
                        <input type="text" name="City" 
                              placeholder="Enter City Name" 
                                className='w-full px-3 py-2 border-1 border-gray-300'
                              />
                        </div>
                  </div>
                  <div>
                      <div>
                        <label className='block text-gray-700' htmlFor=''>Zip Code</label>
                        <input type="number"
                              name="zip_code"
                              placeholder='Enter Zip Code'
                              className='w-full px-3 py-2 border-1 border-gray-300' />
                    </div>
                  </div>
              </div>
              </div>

              <div className="border p-3 mb-3">

              <div onClick={()=> setPaymentToggle(!paymentToggle)} className='flex items-center justify-between'>
                    <h3 className='text-lg font-semibold mb-2'>Payment Information</h3>
                    {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                  </div>

                <div className={`space-y-4 ${paymentToggle ?"":"hidden"} `}>
                  <div className="flex items-center mb-2">
                     
                      <input type="radio" name="payment" checked={paymentMethod=== "cod"}
                      onChange={()=>setPaymentMethod("cod")}

                      />
                       <label className='block text-gray-700 pl-2' htmlFor=''>Cash on Delivery</label>
                  </div>
                  <div className="flex items-center mb-2">
                     
                      <input type="radio" name="payment" checked={paymentMethod=== "dc"}
                      onChange={()=>setPaymentMethod("dc")}

                      />
                       <label className='block text-gray-700 pl-2' htmlFor=''>Debit Card</label>
                  </div>

                  {paymentMethod === "dc" && (
                    <div>
                      <h3 className='text-lg font-semibold mb-2'>Debit Card Information</h3>
                      <div className="mb-4">
                        <label className="block text-gray-700 mb-2 font-semibold" htmlFor="">Card Number</label>
                        <input className="border p-2 w-full rounded" type="text" placeholder="Enter Card Number" required/>
                      </div>
                      <div  className="mb-4">
                        <label className="block text-gray-700 mb-2 font-semibold" htmlFor="">Card Holder Name</label>
                        <input className="border p-2 w-full rounded" type="text" placeholder="Card Holder Name" required/>
                      </div>
                      <div className="flex justify-between mb-4">
                        <div  className="w-1/2">
                          <label className="block text-gray-700 mb-2 font-semibold" htmlFor="">Expiry Date </label>
                          <input className="border p-2 w-full rounded" type="text" placeholder="Expiry Date : MM/YY" required />
                        </div>
                        <div  className="w-1/2 ml-2">
                          <label className="block text-gray-700 mb-2 font-semibold" htmlFor="">CVV</label>
                          <input className="border p-2 w-full rounded" type="number" placeholder="Enter CVV" required />
                        </div>
                      </div>
                    </div>
                  ) 
                  }
               
                  
              </div>
              </div>

              </div>
         
              <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md'>
                  <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
                  <div className="space-y-4">
                    {cart.products.map(product=>(
                      <div key={product.id} className="flex justify-between">
                        <div className="flex items-center">
                          <img src={product.image} alt={product.name} 
                                className="w-16 h-16 object-contain rounded"
                          />
                          <div className="ml-4">
                            <h4 className="text-md font-semibold">{product.name}</h4>
                            <p className="text-gray-600">
                              ${product.price} x {product.quantity} 
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex justify-between">
                      <span>Total Price:</span>
                      <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <div>
                    <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800">
                    Place Order
                    </button>
                  </div>

              </div>
            </div>
    </div>
  )
}

export default Checkout;