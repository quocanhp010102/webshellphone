import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './page/Home';
import Blog from './page/Blog';
import Contact from './page/Contact';
import Layout from './componet/Layout';
import OurStore from './page/OurStore';
import CompareProduct from './page/CompareProduct';
import Login from './page/Login';
import SignUp from './page/SignUp';
import ForgetPass from './page/ForgetPass';
import HomeCart from './page/HomeCart';
import DetailProduct from './page/DetailProduct';
import SinggleProduct from './page/SinggleProduct';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route  path='/' element={<Layout/>}>
                <Route index path='/' element={<Home/>} />
                <Route  path='/blog' element={<Blog/>} />
                <Route  path='/contact' element={<Contact/>} />
                <Route  path='/outstore' element={<OurStore/>} />
                <Route path='/compareProduct' element={<CompareProduct/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<SignUp/>} />
                <Route path='/forgetpass' element={<ForgetPass/>} />
                <Route path='/homecart' element={<HomeCart/>} />
                <Route path='/detailproduct' element={<DetailProduct/>} />
                <Route path='/singleproduct' element={<SinggleProduct/>} />
            </Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
