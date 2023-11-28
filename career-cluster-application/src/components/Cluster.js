import React from 'react';
import ClusterFunctions, { GetClusterImageByID } from '../ClusterFunctions';
import FinalCluster, { CareerClusterMap } from '../ClusterFunctions.js'
import { Link } from 'react-router-dom';
import { GetClusterNameByID } from '../ClusterFunctions.js'
//import { GetClusterImageByID } from '../ClusterFunctions';
import './Cluster.css';


const Cluster = ( {ID, onClick} ) => {
  /*
  var imagePath = GetClusterImageByID(CareerClusterMap, ID);
  console.log(imagePath);
  var image = require(imagePath);
  */
  return (
    <div onClick={() => onClick(ID)} class="cluster">
      <img src={ GetClusterImageByID(CareerClusterMap, ID) } alt="Cluster Picture" className="cluster-pics"></img>
      <h2>{GetClusterNameByID(CareerClusterMap, ID)}</h2>

      {/* <Link to={{pathname: '/cluster/subcluster', state: {clusterID:  ID }}}>
        Go to Subcluster ------- Failed Attempt to send ID 
      </Link>    */}
    </div>
  );
}

export default Cluster;

//require('./Cluster_Pictures/Mathematics.png')