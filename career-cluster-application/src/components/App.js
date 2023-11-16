import logo from './logo.svg';
import './App.css';
// import { Link, useNavigate } from 'react-router-dom';
import Cluster from './Cluster.js'
import DemographicInfo from './DemographicInfo.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


import { CareerClusterMap } from '../ClusterFunctions.js'
import { GetClusterNameByID } from '../ClusterFunctions.js'
import ClusterFunctions from '../ClusterFunctions.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cluster" element={<Cluster />} />
      </Routes>
    </Router>
  );
}

export default App;
