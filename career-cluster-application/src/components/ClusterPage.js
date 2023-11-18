import React from "react";
import Cluster from './Cluster.js'
import BottomRectangle from "./pageTemplate/BottomRectangle.js";
import UserIcon from "./pageTemplate/UserIcon.js";
import TopRectangle from "./pageTemplate/TopRectangle.js";
import { CareerClusterMap } from '../ClusterFunctions.js';
import { GetClusterNameByID } from '../ClusterFunctions.js';
import './ClusterPage.css';

const ClusterPage = () => {

    //This is one idea I had to get all the clusters without null ID's.  
    //In this case, we could loop through this array which stores the valid ID's to get the clusters we want
    //using the methods in ClusterFunctions.js
    let ValidClusterArray = [];
    
    for (let i = 1; i < CareerClusterMap.size; i++)
    {
        if (GetClusterNameByID(CareerClusterMap, i) != 0) 
        {
            ValidClusterArray.push(i);
        }

    }
    console.log("Valid ARRAY   " , ValidClusterArray)
    //Now we would know what clusters are valid to be used.  Hopefully there is some way to loop through the ID's 
    // In here and pass them to 'Cluster.js' and get returned the cluster element with the name, image corresponding to the passed ID

    return (
    <div>
        <TopRectangle/>
        <UserIcon/>
        <div id="cluster-container">
            <Cluster/> 
            <Cluster/>
            <Cluster/>
            <Cluster/>
        </div>
        
        <BottomRectangle/>
        
        

    </div>
    )
}


export default ClusterPage;