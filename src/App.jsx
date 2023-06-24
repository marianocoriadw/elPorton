import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import CartProducts from "./components/CartProducts";
import { CustomProviders } from "./context/Context";
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return(
    <>
    <BrowserRouter>
    <CustomProviders>
      < Header />
      <Routes>
        <Route path="/" element={  <ItemListContainer />} />
        <Route path="/products" element={  <ItemListContainer />} />
        <Route path='/category/:id' element={ <ItemListContainer />}/>
        <Route path='/pedido' element={ <CartProducts/>}/>
      </Routes>
    </CustomProviders>
    </BrowserRouter>
    < Footer />
    </>
  )
}

export default App
