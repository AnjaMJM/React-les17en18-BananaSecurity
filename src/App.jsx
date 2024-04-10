import React, {useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import { AuthContext } from "./context/AuthContext";

function App() {
    const {auth } = useContext(AuthContext)
  return (
    <>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Profile is voorzien van private route */}
          <Route path="/profile" element={auth.isAuth? <Profile /> : <Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
