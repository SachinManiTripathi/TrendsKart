import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Homepage from "./pages/Homepage/Homepage"
import Shop from "./pages/Shop/Shop"
import Cart from "./pages/Cart/Cart"
import Checkout from "./pages/Checkout/Checkout"
function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
      <Footer />
    </Router>
       
    </>
  )
}

export default App





