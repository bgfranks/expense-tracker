import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

// components
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/navbar/Navbar';

function App() {
  const { authIsReady } = useAuthContext();
  return (
    <div className='App'>
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
