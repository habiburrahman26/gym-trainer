import { Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Header from './Layout/Header';
import AboutMe from './pages/AboutMe';
import Blogs from './pages/Blogs';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<AboutMe />} />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
