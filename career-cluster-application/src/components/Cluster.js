import React from 'react';
import ClusterFunctions, { GetClusterImageByID } from '../ClusterFunctions';
import { CareerClusterMap } from '../ClusterFunctions.js'
import { GetClusterNameByID } from '../ClusterFunctions.js'
//import { GetClusterImageByID } from '../ClusterFunctions';
import './Cluster.css';


const Cluster = () => {
  return (
    <div class="cluster">
      <h2>{GetClusterNameByID(CareerClusterMap, 1)}</h2>
      <img src={ GetClusterImageByID(CareerClusterMap, 1) } alt="Cluster Picture" className="cluster-pics"></img>
    </div>
  );
}

export default Cluster;

//require('./Cluster_Pictures/Mathematics.png')