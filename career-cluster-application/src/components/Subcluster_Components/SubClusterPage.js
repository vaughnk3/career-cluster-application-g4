import BottomRectangle from "../pageTemplate/BottomRectangle.js";
import UserIcon from "../pageTemplate/UserIcon.js";
import TopRectangle from "../pageTemplate/TopRectangle.js";
import { CareerClusterMap } from '../../ClusterFunctions.js';
import { GetClusterNameByID } from "../../ClusterFunctions.js";
import { GetFieldsByID } from "../../ClusterFunctions.js";
import { GetFieldNameByIDS } from "../../ClusterFunctions.js";
import { useLocation } from 'react-router-dom';
import SubCluster from "./SubCluster.js";
import FinalCluster  from "../../ClusterFunctions.js";

const SubClusterPage = ( {} ) => {
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
        subComponentArray.push(<SubCluster ID={ClusterID} subID={GoodSubClusterArary[j]} />)
    }
    

    return (
        <div>
            <TopRectangle/>
            <UserIcon/>
            <h1> Sub Cluster Page </h1>
            <h1> Haiiiii </h1>
            {/* <h1 id="test">{clusterID}</h1> */}
            <p> {ClusterID} </p>
            <ul> {subComponentArray} </ul>
            <BottomRectangle/>
        </div>
    )
}


export default SubClusterPage;