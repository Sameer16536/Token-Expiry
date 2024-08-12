
import './App.css'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Header from './component/Header'
import LoginPage from './component/Login'
import HomePage from './component/Home'
import { useEffect } from 'react'


function App() {
  
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     navigate('/');
  //   } else {
  //     navigate('/login');
  //   }
  // }, [navigate]);
  return (
    <>
    <BrowserRouter>
    <div>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path='/' element={<HomePage/>}/>
         
        </Routes>
      </div>
    </BrowserRouter>
    
    </>
  )
}

export default App
