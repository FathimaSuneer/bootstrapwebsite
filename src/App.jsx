
import { Container,Row,Col, Spinner } from 'react-bootstrap';
import './App.css'
import Headernav from './headernav';
import Productitems from './productitems';
import Signup from './usersignup';
import {Routes,Route} from 'react-router-dom';
import { lazy,Suspense } from 'react';
import About from './about';
function App() {
 const Home=lazy(()=>import('./productitems'))
 const Sign=lazy(()=> import('./usersignup'))
 const Abt=lazy(()=> import('./about'))
 const Parl=lazy(()=> import('./parallexex'))
 const UserH=lazy(()=> import('./userhome'))
  return (
    <>

    <Suspense fallback={ 
      <div style={{width:'60%',margin:'0 auto', display:'flex',justifyContent:'center'}}>
      <Spinner   animation="border" variant='danger'/>
      </div>
      }>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/signup" element={<Sign/>}/>
          <Route path="/about" element={<Abt/>}/>
          <Route path="/userhome/*" element={<UserH/>}/>
        </Routes>
    </Suspense>
    
     
    </>
  )
}

export default App

