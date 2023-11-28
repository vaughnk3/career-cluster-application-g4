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
            <img src={ GetFieldImageByIDS(CareerClusterMap, ID, subID) } alt="SubCluster Picture" className="subcluster-pics"></img>
            <h2> { GetFieldNameByIDS(CareerClusterMap, ID, subID) } </h2>
        </div>
    );
};

export default SubCluster