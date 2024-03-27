import React , {useEffect,useContext}from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Signup from './Pages/Signup.js';
import Login from './Pages/Login.js';
import { AuthContext, FirebaseContext } from './store/FirebaseaContext';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home.js';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Router>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

          </Routes>
      
      </Router>
    </div>
  );
}

export default App;
