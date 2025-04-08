
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import './scss/main.scss';
import Home from './pages/home';
import Product from './pages/product';
import ProductDetail from './pages/productDetail';
import ProductForm from './pages/form';
import { Provider } from 'react-redux';
import { store } from './redux/rootReducer';
import { SignInModalWrapper } from './component/SignupWrapper';
import { RegisterModalWrapper } from './component/RegisterWrapper';
import SignInModal from './component/Signin';
import RegisterModal from './component/Register';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Save the previous location in state if coming from another page
  const pathname = location.state?.pathname || location;
  return (
    <div className="App ">
      <Provider store={store}>
        {/* <div className="flex items-center gap-4 px-4 py-2">
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-red-600' : ''} to={'/'}>  Home</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-red-600' : ''} to={'/product'}>  Product</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-red-600' : ''} to={'/product-single/4566'}>  Apple Product</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-red-600' : ''} to={'/create-product'}> Create Product</NavLink>
        </div> */}
        <Routes location={pathname}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/signin" element={<SignInModalWrapper />} /> */}
          {/* <Route path="/register" element={<RegisterModalWrapper />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/product-single/:productId" element={<ProductDetail />} />
          <Route path="/create-product" element={<ProductForm />} />
        </Routes>
        {location.pathname === "/signin" && <SignInModal closeModal={() => navigate(-1)} />}
        {location.pathname === "/register" && <RegisterModal closeModal={() => navigate(-1)} />}
      </Provider>
    </div>
  );
}

export default App;
