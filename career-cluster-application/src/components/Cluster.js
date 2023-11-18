import React from 'react';
import ClusterFunctions from '../ClusterFunctions';
import { CareerClusterMap } from '../ClusterFunctions.js'
import { GetClusterNameByID } from '../ClusterFunctions.js'

import './Cluster.css';


const Cluster = () => {
  return (
    <div class="cluster">
      <h2>{GetClusterNameByID(CareerClusterMap, 1)}</h2>
    </div>
  );
}

export default Cluster;
