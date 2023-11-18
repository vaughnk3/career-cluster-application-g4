import React from 'react';
import ClusterFunctions from '../ClusterFunctions';
import { CareerClusterMap } from '../ClusterFunctions.js'
import { GetClusterNameByID } from '../ClusterFunctions.js'




const Cluster = () => {
  return (
    <div>
      <p>{GetClusterNameByID(CareerClusterMap, 1)}</p>
    </div>
  );
}

export default Cluster;
