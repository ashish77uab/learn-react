
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Product from './pages/product';
import ProductDetail from './pages/productDetail';
import ProductForm from './pages/form';
import { Provider } from 'react-redux';
import { store } from './redux/rootReducer';

function App() {

  return (
    <div className="App ">


      <Provider store={store}>
        <BrowserRouter>
          <div className="flex items-center gap-4 px-4 py-2">
            <NavLink className={({ isActive }) => isActive ? 'font-bold text-red-600' : ''} to={'/'}>  Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'font-bold text-red-600' : ''} to={'/product'}>  Product</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'font-bold text-red-600' : ''} to={'/product-single/4566'}>  Apple Product</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'font-bold text-red-600' : ''} to={'/create-product'}> Create Product</NavLink>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product-single/:productId" element={<ProductDetail />} />
            <Route path="/create-product" element={<ProductForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
