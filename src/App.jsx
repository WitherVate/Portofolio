import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import { AuthProvider } from './context/AuthContext';
import DashboardPage from './pages/DashboardPage';
import AboutSection from './components/AboutSection';

const App = () => {
  return (
    <div>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/dashboard' element={<DashboardPage />} />
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  )
}

export default App
