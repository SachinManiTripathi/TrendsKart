
const ChangeAddress = () => {
  return (
    <div>
     <h2 className="text-xl font-bold flex items-center  justify-center mb-4">Change Address</h2>  
        <input className="border p-2 w-full mb-4" type="text" placeholder="Enter New Address" />
        <div className="flex justify-end">
            <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2">Cancel</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Save Address</button>
        </div>
    </div>
  )
}

export default ChangeAddress