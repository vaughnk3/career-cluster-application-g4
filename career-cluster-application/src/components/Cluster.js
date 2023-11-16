import React from 'react';
import ClusterFunctions from '../ClusterFunctions';
import { CareerClusterMap } from '../ClusterFunctions.js'
import { GetClusterNameByID } from '../ClusterFunctions.js'




const Cluster = () => {
  return (
    <div>
      <h1>{GetClusterNameByID(CareerClusterMap, 1)}</h1>
    </div>
  );
}

export default Cluster;
