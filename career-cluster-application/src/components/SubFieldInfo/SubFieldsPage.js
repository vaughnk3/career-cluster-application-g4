import BottomRectangle from "../pageTemplate/BottomRectangle.js";
import UserIcon from "../pageTemplate/UserIcon.js";
import TopRectangle from "../pageTemplate/TopRectangle.js";
import { CareerClusterMap, GetFieldNameByIDS } from '../../ClusterFunctions.js'
import { GetFieldDescripByIDS, GetFieldSalaryByIDS, GetFieldEdLevelByIDS, GetFieldGrowthRateByIDS } from "../../ClusterFunctions.js";
import './SubFieldPage.css'

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
        
            <br></br><br></br>
            <div id="row">
            <div id="topLeft">
                <h2 id="fName"> { GetFieldNameByIDS (CareerClusterMap, ClusterID, SubID) } </h2>
                <h2 id="fDesc"> { GetFieldDescripByIDS (CareerClusterMap, ClusterID, SubID) } </h2>
            </div>
            <button id="jobPostings">View Job Postings</button>
            </div>
            <div id="bottomMiddle">
                <ul class="inline">
                    <li class="fInlineTitle">Average Salary</li>
                    <li class="fInlineTitle">Education Level</li>
                    <li class="fInlineTitle">Growth Rate</li>
                </ul><br></br>
                <ul class="inline">
                    <li class="fInline">{ GetFieldSalaryByIDS (CareerClusterMap, ClusterID, SubID) }</li>
                    <li class="fInline">{ GetFieldEdLevelByIDS (CareerClusterMap, ClusterID, SubID) }</li>
                    <li class="fInline">{ GetFieldGrowthRateByIDS (CareerClusterMap, ClusterID, SubID) }</li><br></br>
                </ul>
            </div>
            
            <BottomRectangle/>
        </div>
    )
}



export default SubFieldsPage;