import './App.css'
import {Route, BrowserRouter as Router, Routes  } from 'react-router-dom';
import { Home } from './pages/home';
import {Contact}  from  './pages/contact';
import {Menu}  from  './pages/Menu';
import { useState } from 'react';

function App() {

// const [isTrue, setIsTrue]=useState(false);

  
// async function name() {
//   try{

//     const response = await axios.get('url');
//     return response; 
//   }catch(err){
//     console.log(err);
//   }
// }

// useEffect(() => {
//   if(isTrue){

//     name();
//   }
  
// }, [isTrue])





  return (
    <div className='App'> 
      <Router>
        <div> Navbar</div>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/menu' element = {<Menu/>}/>
          <Route path = '*' element = {<h1>Page Not found</h1>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
