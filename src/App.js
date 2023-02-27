import React , {useState}  from 'react';
import './App.css';
import { AppProvider } from './context/AppContext';
import {  BrowserRouter,  Route,   Routes, } from "react-router-dom";

import Loading from './components/Loading';
import MapPage from './pages/Map';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import JoinUs from './pages/JoinUs';
import About from './pages/About';
import Navbar from './components/Navbar';



const App = () => {

  const [loadingWeb , setLoadingWeb ] = useState(true);



  setTimeout(() => {
    setLoadingWeb(false);
  } , 1500);

  return (

    <AppProvider>

    {loadingWeb ? (
      <Loading />
    ) : (
   <BrowserRouter>
   <Navbar />
  
          <Routes>
            
              <Route
                path="/"
                element={
                <MapPage />
                }
              />
            
              <Route
                path="/home"
                element={
                <Home />
                }
              />
                   
            
              <Route
                path="/login"
                element={
                <Login />
                }
              />

              <Route
                path="/signUp"
                element={
                <Signup />
                }
              />
              <Route
                path="/join"
                element={
                <JoinUs />
                }
              />
              <Route
                path="/about"
                element={
                <About />
                }
              />
                   
           
          </Routes>
       
               
        </BrowserRouter>


    )}
  

  


    </AppProvider>
  )
}

export default App