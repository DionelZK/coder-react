import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/Main/ItemlistContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar user="profesor" />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
