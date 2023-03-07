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
import Admin from './admin/Admin';
import Workers from './admin/pages/Workers';
import Markers from './admin/pages/Markers';
import Users from './admin/pages/Users';
import Notifications from './admin/pages/Notifications';



const App = () => {

  const [loadingWeb , setLoadingWeb ] = useState(true);



  setTimeout(() => {
    setLoadingWeb(false);
  } , 800);

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

    <Route
            
            path="/dashboard"
            element={
              <Admin  />
            }
          />

    <Route
            
            path="/dashboard/login"
            element={
              <Login  />
            }
          />

    <Route
            
            path="/dashboard/workers"
            element={
              <Workers  />
            }
          />

    <Route
            
            path="/dashboard/markers"
            element={
              <Markers  />
            }
          />

    <Route
            
            path="/dashboard/notifications"
            element={
              <Notifications  />
            }
          />

    <Route
            
            path="/dashboard/users"
            element={
              <Users  />
            }
          />
                   
           
          </Routes>
       
               
        </BrowserRouter>


    )}
  

  


    </AppProvider>
  )
}

export default App