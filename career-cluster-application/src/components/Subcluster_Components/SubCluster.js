import React from "react";
import ClusterFunctions, { GetClusterImageByID } from '../../ClusterFunctions';
import FinalCluster, { CareerClusterMap } from '../../ClusterFunctions.js'
import { Link } from 'react-router-dom';
import { GetClusterNameByID } from '../../ClusterFunctions.js'
import { GetFieldNameByIDS } from "../../ClusterFunctions";
import { GetFieldImageByIDS } from "../../ClusterFunctions";
import './SubCluster.css'

const SubCluster = ( {ID, subID, onClick} ) => {
    return (
        <div onClick={() => onClick(subID)} class="subcluster"> 
            <img src={ require('../Cluster_Pictures/Mathematics.png') } alt="SubCluster Picture" className="subcluster-pics"></img>
            <h2> { GetFieldNameByIDS(CareerClusterMap, ID, subID) } </h2>
        </div>
    );
};

export default SubCluster

//GetFieldImageByIDS(CareerClusterMap, ID, subID)