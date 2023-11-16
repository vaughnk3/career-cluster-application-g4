// Initialize the map
const CareerClusterMap = new Map();


//First Cluster
CareerClusterMap.set(
    1,
    {
        name:'Mathematics',
        image:'/Some/Url',
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Statistician',
                fieldImageLink: '/Some/Other/Url',
                fieldSalary: '$98,000',
                fieldDescrip: 'Some description of the field',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Masters Degree',
                //jobsOfField: []
            }
        ]
    }
)

console.log(CareerClusterMap)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*                      CLUSTER ADD, EDIT, DELETE                                                           */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Function to add a new cluster
// All it does is set a new cluster in the map
function AddCluster (CareerClusterMap, ClusterName, ClusterImageLink) 
{
    //It is offset by 1 because it would be the # of clusters already there + one more for the new one being added
    let ClusterID = CareerClusterMap.size + 1;
    CareerClusterMap.set(
        ClusterID,
        {
            name:ClusterName,
            image:ClusterImageLink,
            SubClusters: []
        }
    )
}

//Function to update the name in a particular cluster  by inserted ID
function UpdateClusterName (CareerClusterMap, NewClusterName, ClusterID) 
{
    CareerClusterMap.get(ClusterID).name = NewClusterName;
}


//Function to update the image link in a particular cluster by inserted ID
function UpdateClusterImageLink (CareerClusterMap, NewImageLink, ClusterID) 
{
    CareerClusterMap.get(ClusterID).image = NewImageLink;
}

//Function to delete cluster by ID
//To preserve ID's, the entry will remain there, but all the other fields except for ID will be Null.  
function DeleteCluster (CareerClusterMap, ClusterID)
{
    CareerClusterMap.get(ClusterID).name = null;
    CareerClusterMap.get(ClusterID).image = null;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*                      CLUSTER ADD, EDIT, DELETE      END                                                    */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*                      CLUSTER FIELD METHODS                                                                 */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Adds a new entry into the internal array of a particular cluster to add a new field
function AddClusterField (CareerClusterMap, ClusterID, FieldName, FieldDescrip, FieldSalary, FieldGrowthR, FieldImageLink, FieldEdLevel) 
{
    //The ID of the new cluster field would be the length of the array + 1
    let arrayLength = CareerClusterMap.get(ClusterID).SubClusters.length + 1;
    CareerClusterMap.get(ClusterID).SubClusters.push(
        {
        fieldID: arrayLength,
        fieldName: FieldName,
        fieldImageLink: FieldImageLink,
        fieldSalary: FieldSalary,
        fieldDescrip: FieldDescrip,
        fieldGrowthRate: FieldGrowthR,
        fieldEducationLevel: FieldEdLevel
        }
    )
}

//AddClusterField(CareerClusterMap, 1, 'DevOps', 'Some descrip', '$32,900', 'High', 'Some url', 'College')
//AddClusterField(CareerClusterMap, 1, 'Soft', 'Some descript two', '$3we2,900', 'Low', 'Some url new', 'High school')
//console.log(CareerClusterMap.get(1).SubClusters)


function DeleteClusterField (CareerClusterMap, ClusterID, SubClusterID) 
{
    //The subcluster in question is offset by 1 to the ID.  Ex : If you want to delete field #2, you would be deleting the field at index [1], hence the -1
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldName = null;
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldImageLink = null;
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldSalary = null;
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldDescrip = null;
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldGrowthRate = null;
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldEducationLevel = null;
}

//DeleteClusterField(CareerClusterMap, 1, 1);
//console.log(CareerClusterMap.get(1).SubClusters)


function EditFieldName (CareerClusterMap, ClusterID, SubClusterID, NewFieldName) 
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldName = NewFieldName;
}

//EditFieldName (CareerClusterMap, 1, 1, 'Mickey Mouse');
//console.log(CareerClusterMap.get(1).SubClusters)


function EditFieldImageLink (CareerClusterMap, ClusterID, SubClusterID, NewImageLink) 
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldImageLink = NewImageLink;
}

//EditFieldImageLink(CareerClusterMap, 1, 1, 'My New URL');
//console.log(CareerClusterMap.get(1).SubClusters)

function EditFieldSalary (CareerClusterMap, ClusterID, SubClusterID, NewFieldSalary)
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldSalary = NewFieldSalary;
}

//EditFieldSalary(CareerClusterMap, 1, 1, '$101,901');
//console.log(CareerClusterMap.get(1).SubClusters);

function EditFieldDescription (CareerClusterMap, ClusterID, SubClusterID, NewFieldDescrip)
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldDescrip = NewFieldDescrip;
}

//EditFieldDescription (CareerClusterMap, 1, 1, 'My new description test');
//console.log(CareerClusterMap.get(1).SubClusters);


function EditFieldGrowthRate (CareerClusterMap, ClusterID, SubClusterID, NewFieldGrowthRate)
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldGrowthRate = NewFieldGrowthRate;
}

//EditFieldGrowthRate (CareerClusterMap, 1, 1, 'Medium');
//console.log(CareerClusterMap.get(1).SubClusters);

function EditFieldEducationLevel (CareerClusterMap, ClusterID, SubClusterID, NewEducationLevel) 
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldEducationLevel = NewEducationLevel;
}

//EditFieldEducationLevel (CareerClusterMap, 1, 1, 'Kindergarten');
//console.log(CareerClusterMap.get(1).SubClusters);


function GetClusterNameByID (CareerClusterMap, ClusterID) 
{
    return CareerClusterMap.get(ClusterID).name;
}






/*
/// Test to build up a data system from scratch only using these methods.

//Creates a cluster for math
AddCluster(CareerClusterMap, 'Mathematics', 'Math URL');
//Creates a cluster for computer science
AddCluster(CareerClusterMap, 'Computer Science', 'Comp Sci URL');
//Creates a cluster for Art
AddCluster(CareerClusterMap, 'Art', 'Art URL');
console.log(CareerClusterMap);

console.log("ADDING FIELD BELOW");
//Now lets add some fields to those
AddClusterField(CareerClusterMap, 1, 'Statistician', 'Stats Description', '$98,000', 'High', 'Stats URL', 'College');

console.log(CareerClusterMap)
console.log(CareerClusterMap.get(1).SubClusters)

//Now lets delete the field and the second cluster
DeleteClusterField(CareerClusterMap, 1, 1);
DeleteCluster(CareerClusterMap, 2);

console.log(CareerClusterMap)
console.log(CareerClusterMap.get(1).SubClusters)
*/