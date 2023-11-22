import React from "react";
import ClusterFunctions, { GetClusterImageByID } from '../../ClusterFunctions';
import FinalCluster, { CareerClusterMap } from '../../ClusterFunctions.js'
import { Link } from 'react-router-dom';
import { GetClusterNameByID } from '../../ClusterFunctions.js'
import { GetFieldNameByIDS } from "../../ClusterFunctions";
import { GetFieldImageByIDS } from "../../ClusterFunctions";
import './SubCluster.css'

const SubCluster = ( {ID, subID} ) => {
    return (
        <div class="subcluster"> 
            <h2> { GetFieldNameByIDS(CareerClusterMap, ID, subID) } </h2>
            <h3> { GetFieldImageByIDS(CareerClusterMap, ID, subID) } </h3>
        </div>
    );
};

export default SubCluster