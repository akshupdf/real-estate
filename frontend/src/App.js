import './App.css';
import {Routes,Route,BrowserRouter, Link} from 'react-router-dom'
import Properties from './properties';
import { useEffect } from 'react';
import Login from './login';
import Register from './register';
import Favproperties from './favprops';




function App({product,item}) {

  


  return (
    <div className="App">
      

      <BrowserRouter>
      <div>
        <ul className='flex m-2'>
          <li className='m-2'><Link to='/display'>properties</Link></li>
          <li className='m-2' ><Link to='/login' >Login</Link></li>
          <li className='m-2'><Link to='/register'>Register</Link></li>
          <li className='m-2'><Link to='/liked'>Fav properties</Link></li>
        </ul>
      </div>
      <Routes>
        <Route exact path="/display" element={<Properties />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />} ></Route>
        <Route exact path="/liked" element={<Favproperties product={product} item={item}/>} ></Route>
      </Routes>
      

      

      </BrowserRouter>
      
    </div>
  );
}

export default App;
