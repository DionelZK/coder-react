import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Main/ItemlistContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './components/form/Form';
function App() {
  return (
    <BrowserRouter>
      <Navbar user="profesor" />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Form />} />
      </Routes>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
