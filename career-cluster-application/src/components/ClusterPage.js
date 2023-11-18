import React from "react";
import Cluster from './Cluster.js'
import BottomRectangle from "./pageTemplate/BottomRectangle.js";
import UserIcon from "./pageTemplate/UserIcon.js";
import TopRectangle from "./pageTemplate/TopRectangle.js";


const ClusterPage = () => {
    return (
    <div>
        <Cluster/>
        <BottomRectangle/>
        <UserIcon/>
        <TopRectangle/>

    </div>
    )
}


export default ClusterPage;