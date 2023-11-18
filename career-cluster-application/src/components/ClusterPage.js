import React from "react";
import Cluster from './Cluster.js'
import BottomRectangle from "./pageTemplate/BottomRectangle.js";
import UserIcon from "./pageTemplate/UserIcon.js";
import TopRectangle from "./pageTemplate/TopRectangle.js";

import './ClusterPage.css';

const ClusterPage = () => {
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