import React from 'react';
import ClusterFunctions, { GetClusterImageByID } from '../ClusterFunctions';
import { CareerClusterMap } from '../ClusterFunctions.js'
import { GetClusterNameByID } from '../ClusterFunctions.js'
//import { GetClusterImageByID } from '../ClusterFunctions';
import './Cluster.css';


const Cluster = ( {ID} ) => {
  /*
  var imagePath = GetClusterImageByID(CareerClusterMap, ID);
  console.log(imagePath);
  var image = require(imagePath);
  */
  return (
    <div class="cluster">
      <h2>{GetClusterNameByID(CareerClusterMap, ID)}</h2>
      <img src={ GetClusterImageByID(CareerClusterMap, ID) } alt="Cluster Picture" className="cluster-pics"></img>
    </div>
  );
}

export default Cluster;

//require('./Cluster_Pictures/Mathematics.png')