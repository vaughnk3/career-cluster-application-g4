import React from 'react';
import ClusterFunctions, { GetClusterImageByID } from '../ClusterFunctions';
import { CareerClusterMap } from '../ClusterFunctions.js'
import { GetClusterNameByID } from '../ClusterFunctions.js'
//import { GetClusterImageByID } from '../ClusterFunctions';
import './Cluster.css';


const Cluster = ( {ID} ) => {
  return (
    <div class="cluster">
      <h2>{GetClusterNameByID(CareerClusterMap, ID)}</h2>
      <img src={require( GetClusterImageByID(CareerClusterMap, ID)) } alt="Cluster Picture" className="cluster-pics"></img>
    </div>
  );
}

export default Cluster;

//require('./Cluster_Pictures/Mathematics.png')