import './App.css';
// import { Link, useNavigate } from 'react-router-dom';
import Cluster from './Cluster'
import DemographicInfo from './DemographicInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DemographicInfo />} />
        <Route path="/cluster" element={<Cluster />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
