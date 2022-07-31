import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path='/' element={<Home/>} />

        {/* 404 page - redirects to home page ) */}
        <Route path='*' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
