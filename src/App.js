import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/RequireAuth';
import AddProduct from './routes/Dashboard/Admin/AddProduct';
import MakeAdmin from './routes/Dashboard/Admin/MakeAdmin';
import ManageOrders from './routes/Dashboard/Admin/ManageOrders';
import ManageProducts from './routes/Dashboard/Admin/ManageProducts';
import Dashboard from './routes/Dashboard/Dashboard';
import AddingReview from './routes/Dashboard/User/AddingReview';
import MyOrders from './routes/Dashboard/User/MyOrders';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Register from './routes/Login/Register';
import Reset from './routes/Login/Reset';
import Navbar from './shared/Navbar';
import Purchase from './shared/Purchase';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/reset' element={<Reset></Reset>}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>


        <Route
          path='/dashboard'
          element={<RequireAuth>
            <Dashboard />
          </RequireAuth>
          }>
          {/* user segment */}
          <Route index element={<MyOrders />} />
          <Route path='addingReview' element={<AddingReview />} />

          {/* admin segment */}
          <Route path='addProduct' element={<AddProduct />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
          <Route path='manageOrders' element={<ManageOrders />} />
          <Route path='manageProducts' element={<ManageProducts />} />
        </Route>


        <Route></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
