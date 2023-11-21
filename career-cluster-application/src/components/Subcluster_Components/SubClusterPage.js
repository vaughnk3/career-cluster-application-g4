import BottomRectangle from "../pageTemplate/BottomRectangle.js";
import UserIcon from "../pageTemplate/UserIcon.js";
import TopRectangle from "../pageTemplate/TopRectangle.js";
import { CareerClusterMap } from '../../ClusterFunctions.js';
import { GetClusterNameByID } from "../../ClusterFunctions.js";
import { useLocation } from 'react-router-dom';

const SubClusterPage = ( {} ) => {
    // const location = useLocation();
    // const { clusterID } = location.state || {}; Failed Attempt at sending ID over -- correspondings to attempt with <Link> in Cluster.js

    return (
        <div>
            <TopRectangle/>
            <UserIcon/>
            <h1> Sub Cluster Page </h1>
            <h1> Haiiiii </h1>
            {/* <h1 id="test">{clusterID}</h1> */}

            <BottomRectangle/>
        </div>
    )
}


export default SubClusterPage;