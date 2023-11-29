import React, { useState } from "react";
import Cluster from './Cluster.js'
import BottomRectangle from "./pageTemplate/BottomRectangle.js";
import UserIcon from "./pageTemplate/UserIcon.js";
import { Link, useNavigate } from 'react-router-dom';
import TopRectangle from "./pageTemplate/TopRectangle.js";
import { CareerClusterMap } from '../ClusterFunctions.js';
import { GetClusterNameByID } from '../ClusterFunctions.js';
import './ClusterPage.css';
import FinalCluster from "../ClusterFunctions.js";

const ClusterPage = () => {
    //This is one idea I had to get all the clusters without null ID's.  
    //In this case, we could loop through this array which stores the valid ID's to get the clusters we want
    //using the methods in ClusterFunctions.js
    const navigate = useNavigate();
    const [selectedCluster, setSelectedCluster] = useState(null);

    const handleClusterClick = (ID) => {
        console.log(ID)
        navigate('/cluster/subcluster')
        //FinalCluster = ID;
        for (let i = 1; i <= CareerClusterMap.size; i++)
        {
            CareerClusterMap.get(i).final = null;
        }
        console.log(CareerClusterMap.get(ID))
        CareerClusterMap.get(ID).final = ID;
        return ID;
    }

    const handleFormSubmit =(e) => {
        e.preventDefault();
        navigate('/cluster/subcluster')
    }

    let ValidClusterArray = [];
    
    for (let i = 1; i <= CareerClusterMap.size; i++)
    {
        if (GetClusterNameByID(CareerClusterMap, i) != null) 
        {
            ValidClusterArray.push(i);
        }

    }
    

    let ComponentArray = [];
    for (let j = 0; j < ValidClusterArray.length; j++) 
    {
        ComponentArray.push(   
        <form id="form" key={ValidClusterArray[j]} onSubmit={handleFormSubmit} >
            <Cluster ID={ValidClusterArray[j]} onClick={handleClusterClick} />
        </form>
        );
    }

    //Now we would know what clusters are valid to be used.  Hopefully there is some way to loop through the ID's 
    // In here and pass them to 'Cluster.js' and get returned the cluster element with the name, image corresponding to the passed ID

    return (
    <div>
        <div id="topRectangle">
            <h1>Welcome</h1>
            <p>Please select a cluster that interests you. This website will help match you with potential careers in your area of interest.</p>
        </div>
        <UserIcon/>
 
            <li id="c_array">{ComponentArray}</li>
     

  
        <BottomRectangle/>

    </div>
    )
}


export default ClusterPage;


