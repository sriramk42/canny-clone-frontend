import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeatureAdd from './pages/FeatureAdd';
import FeatureDetail from './pages/FeatureDetail';
import FeatureEdit from './pages/FeatureEdit';
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path='/' element={<Home/>} />

        {/* Feature detail page */}
        <Route path='/feature/detail/:featureID' element={<FeatureDetail />} />

        {/* Edit Feature page */}
        <Route path='/feature/edit/:featureID' element={<FeatureEdit />} />

        {/* Add new Feature page */}
        <Route path='/feature/add/' element={<FeatureAdd />} />

        {/* 404 page - redirects to home page ) */}
        <Route path='*' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
