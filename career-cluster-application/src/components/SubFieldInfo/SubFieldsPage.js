import BottomRectangle from "../pageTemplate/BottomRectangle.js";
import UserIcon from "../pageTemplate/UserIcon.js";
import TopRectangle from "../pageTemplate/TopRectangle.js";
import { CareerClusterMap } from '../../ClusterFunctions.js'


const SubFieldsPage = () => {
    return (
        <div>
            <TopRectangle/>
            <UserIcon/>

            <h1> Field Info </h1> 
            <BottomRectangle/>
        </div>
    )
}



export default SubFieldsPage;