import Topbar from './Components/Topbar/Topbar';
import Sidebar from './Components/Sidebar/Sidebar';
import './App.css'
import Home from './Components/Home/Home';
import User from '../src/Pages/User/User.'
import Userlist from '../src/Pages/Userlist/Userlist';
import Newuser from './Pages/newuser/newuser'
import Productlist from './Pages/Productlist/Productlist'
import Product from './Pages/Product/Product'
import Newproduct from './Pages/newproduct/newproduct'
import{BrowserRouter ,Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Topbar />
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route  exact path= '/' element={<Home/> } />
          
          
          <Route path= '/users' element={<Userlist />} />
          <Route path= '/user/:userid' element={<User />} />
          <Route path= '/newuser' element={<Newuser />} />

       
        <Route path= '/products' element={<Productlist />} />
        <Route path= '/products/:productid' element={<Product />} />
        <Route path= '/newproduct' element={<Newproduct />} />
        </Routes>
       
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
