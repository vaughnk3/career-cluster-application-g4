import BottomRectangle from "../pageTemplate/BottomRectangle.js";
import UserIcon from "../pageTemplate/UserIcon.js";
import TopRectangle from "../pageTemplate/TopRectangle.js";
import { CareerClusterMap, SetFieldFinalToNull } from '../../ClusterFunctions.js';
import { GetClusterNameByID } from "../../ClusterFunctions.js";
import { GetFieldsByID } from "../../ClusterFunctions.js";
import { GetFieldNameByIDS } from "../../ClusterFunctions.js";
import { useLocation } from 'react-router-dom';
import SubCluster from "./SubCluster.js";
import FinalCluster  from "../../ClusterFunctions.js";
import './SubClusterPage.css'
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Cluster from "../Cluster.js";




const SubClusterPage = ( {} ) => {
    const navigate = useNavigate();
    const [selectedCluster, setSelectedCluster] = useState(null);

    const handleClusterClick = (SubID) => {
        console.log(SubID)
        navigate('/cluster/subcluster/subclusterinfo')

        let ClusterID = null;
        //Grab the Cluster ID
        for (let i = 1; i <= CareerClusterMap.size; i++) 
        {
            if (CareerClusterMap.get(i).final != null) 
            {
                ClusterID = i;
            }
        }
        //console.log("SUBFIELD ID = ", SubID, "NOW CLUSTER  ", ClusterID);

        //Set all subfield finals to null (incase of a clickback)
        for (let i = 0; i < CareerClusterMap.get(ClusterID).SubClusters.length; i++)
        {
            SetFieldFinalToNull(CareerClusterMap, ClusterID, i);
        }
        
        //Now, update the fieldFinal data with the SubId 
        CareerClusterMap.get(ClusterID).SubClusters[SubID].fieldFinal = SubID;

    }



    // const location = useLocation(); 
    // const { clusterID } = location.state || {}; Failed Attempt at sending ID over -- correspondings to attempt with <Link> in Cluster.js
    //Check to see what final field is not null, this index is then the cluster ID
    let ClusterID = null;
    for (let i = 1; i <= CareerClusterMap.size; i++) 
    {
        if (CareerClusterMap.get(i).final != null) 
        {
            ClusterID = i;
        }
    }

    console.log("SUBCLUSTER TEST   ", ClusterID);

    
    //Get all the good subcluster "ids" to know which ones to list.
    let SubClusterArray = GetFieldsByID (CareerClusterMap, ClusterID);
    let GoodSubClusterArary = [];
    //If the name of the subcluster is not null, store its ID
    for (let i = 0; i < SubClusterArray.length; i++)
    {
        if (GetFieldNameByIDS(CareerClusterMap, ClusterID, i) != null)
        {
            GoodSubClusterArary.push(i);
        }
    }
    
    //Now store the good components for subclusters
    let subComponentArray = [];
    for (let j = 0; j < GoodSubClusterArary.length; j++)
    {
        subComponentArray.push(<SubCluster ID={ClusterID} subID={GoodSubClusterArary[j]} onClick={handleClusterClick} />)
    }
    

    return (
        <div>
        <div id="_topRectangle">
            <p>Please select a subcluster within the career cluster.</p>
        </div>
            <UserIcon/>
            {/* <h1 id="test">{clusterID}</h1> */}
            <p> {ClusterID} </p>
            <ul> {subComponentArray} </ul>
            <BottomRectangle/>
        </div>
    )
}


export default SubClusterPage;