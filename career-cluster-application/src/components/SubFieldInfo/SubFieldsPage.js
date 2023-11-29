import BottomRectangle from "../pageTemplate/BottomRectangle.js";
import UserIcon from "../pageTemplate/UserIcon.js";
import TopRectangle from "../pageTemplate/TopRectangle.js";
import { CareerClusterMap, GetFieldNameByIDS } from '../../ClusterFunctions.js'
import { GetFieldDescripByIDS, GetFieldSalaryByIDS, GetFieldEdLevelByIDS, GetFieldGrowthRateByIDS } from "../../ClusterFunctions.js";

const SubFieldsPage = () => {

    //Grab the cluster ID
    let ClusterID = null;
    for (let i = 1; i <= CareerClusterMap.size; i++) 
    {
        if (CareerClusterMap.get(i).final != null) 
        {
            ClusterID = i;
        }
    }

    //Grab the Subcluster ID
    let SubID = null;
    for (let j = 0; j < CareerClusterMap.get(ClusterID).SubClusters.length; j++)
    {
        if (CareerClusterMap.get(ClusterID).SubClusters[j].fieldFinal != null)
        {
            SubID = j;
        }
    }

    //Now that we know which cluster and subcluster we are in, we can just grab the information via the functions from ClusterFunctions
    
    return (
        <div>
            <TopRectangle/>
            <UserIcon/>

            <h1> Field Info </h1> 
            <h2> { GetFieldNameByIDS (CareerClusterMap, ClusterID, SubID) } </h2>
            <h2> { GetFieldDescripByIDS (CareerClusterMap, ClusterID, SubID) } </h2>
            <h2> { GetFieldSalaryByIDS (CareerClusterMap, ClusterID, SubID) } </h2>
            <h2> { GetFieldEdLevelByIDS (CareerClusterMap, ClusterID, SubID) } </h2>
            <h2> { GetFieldGrowthRateByIDS (CareerClusterMap, ClusterID, SubID) } </h2>
            <BottomRectangle/>
        </div>
    )
}



export default SubFieldsPage;