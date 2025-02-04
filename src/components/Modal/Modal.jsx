

const Modal = ({isModalOpen,setIsModalOpen,children}) => {
    if(!isModalOpen) return null;
  return (
    <div  className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
       
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <button className="absolute top-4 right-4 text-gray-300 text-3xl" onClick={()=>setIsModalOpen(false)}> &times;</button>
            {children}
        </div>
    </div>
  )
}

export default Modal