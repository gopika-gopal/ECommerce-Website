import React, { lazy, Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CreateForm from './components/Dashboard/CreateForm';
import Customer from './components/Dashboard/Customer';
import AdminProductDetails from './components/Dashboard/productDetails';
import Footer from './components/Home/Footer';
import Header from './components/Home/Header';
import Loader from './components/Skeleton/Loader';
import useFetchCurrentUser from './hooks/useFetchCurrentUser';
import Cart from './pages/Cart/Cart';
import Shipping from './pages/Shipping/Shipping';
import { addToken } from './utils/tokenSlice';
import Grid from './components/Grid Image/Grid';
const MyOrders = lazy(() => import('./pages/MyOrders/MyOrders'));
const OrderDetails = lazy(() => import('./components/Dashboard/OrderDetails'));
const Home = lazy(() => import('./components/Home/home'));
const About = lazy(() => import('./pages/About/About'));
const ProductCatalogue = lazy(() => import('./pages/ProductCatalogue/ProductCatalogue'));
const ProductDetails = lazy(() => import('./pages/ProductDetails/ProductDetails'));
const Register = lazy(() => import('./pages/Register/Register'));
const ContactUs = lazy(() => import('./components/Contact/ContactUs'));
const Product = lazy(() => import('./components/Dashboard/Product'));

const App = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  const token = useSelector(state => state.token)
  useFetchCurrentUser(token);
  useEffect(() => {

    if (token) {
      dispatch(addToken(token))
    }

  }, [token])


  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductCatalogue />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<Home />} />
          {!user && <Route path='/account/auth' element={<Register />} />}
          {user && <Route path='/myOrders' element={<MyOrders />} />}
          {user && user?.isAdmin && <Route path='/admin/dashboard/products' element={<Product />} />}
          {user && user?.isAdmin && <Route path='/admin/dashboard/customers' element={<Customer />} />}
          {user && user?.isAdmin && <Route path='/admin/dashboard/orders' element={<OrderDetails />} />}
          {user && user?.isAdmin && <Route path='/admin/dashboard/product/:id' element={<AdminProductDetails />} />}
          {user && user?.isAdmin && <Route path='/admin/dashboard/product/new' element={<CreateForm />} />}
          {user && <Route path='/shipping' element={<Shipping />} />}
        </Routes>
      </Suspense>
      <Footer />
      <Toaster position='bottom-center' />
    </Router>
  )
}

export default App
