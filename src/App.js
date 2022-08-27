import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
// import Login from './component/Login/Login';
import { Routes, Route } from 'react-router-dom';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import OrderReview from './component/OrderReview/OrderReview';
import SignUp from './component/SignUp/SignUp';



function App() {
  return (
    <div className='relative'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shops' element={<Shop></Shop>}></Route>
        <Route path='/orderReviews' element={<OrderReview></OrderReview>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>

    </div>
  );
}

export default App;
