import React from "react";

// Initialize the map
export const CareerClusterMap = new Map();

const FinalCluster = null;
export default FinalCluster;

/*
function ImgToB64 (ImageURL) {
    var base64Img = require('base64-img');
    base64Img.base64(ImageURL, function(err, data) {});
    return base64Img.toString();
}
*/


//First Cluster
CareerClusterMap.set(
    1,
    {
        name:'Agriculture, Food & Natural Resources',
        image: './Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Actuarial Science',
                fieldImageLink: '/Some/Other/Url1',
                fieldSalary: '$98,000',
                fieldDescrip: 'Some description of the field',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Masters Degree',
                //jobsOfField: []
            }, 

            {
                fieldID: 2,
                fieldName: 'Athletic Training',
                fieldImageLink: '/Some/Other/Url2',
                fieldSalary: '$98,000',
                fieldDescrip: 'Some description of the field',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Masters Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Biological Sciences',
                fieldImageLink: '/Some/Other/Url3',
                fieldSalary: '$98,000',
                fieldDescrip: 'Some description of the field',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Masters Degree',
                //jobsOfField: []
            }, 

            {
                fieldID: 4,
                fieldName: 'Environmental Science',
                fieldImageLink: '/Some/Other/Url3',
                fieldSalary: '$98,000',
                fieldDescrip: 'Some description of the field',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Masters Degree',
                //jobsOfField: []
            }
        ]
    }
)

//'Computer Science'
CareerClusterMap.set(
    2,
    {
        name: 'Architecture and Construction',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Real Estate',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }, 

            {
                fieldID: 2,
                fieldName: 'Civil Engineering',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }, 

            {
                fieldID: 3,
                fieldName: 'Interior Design',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }, 

            {
                fieldID: 4,
                fieldName: 'Management Information Systems',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)

CareerClusterMap.set(
    3,
    {
        name: 'Arts, A/V Technology & Communications',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Art History',
                fieldImageLink: '/Some/Other/Art/Url',
                fieldSalary: '$1,000',
                fieldDescrip: 'Some art description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }, 

            {
                fieldID: 2,
                fieldName: 'Media Studies',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }, 

            {
                fieldID: 3,
                fieldName: 'Music Composition',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Music Theory',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)

CareerClusterMap.set(
    4,
    {
        name: 'Business Management & Administration',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Business Accounting',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'International Affairs',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Statistics',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Entrepenuership',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)

CareerClusterMap.set(
    5,
    {
        name: 'Education and Training',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Audiology',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Early Childhood Education',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'History',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'English Education',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)

CareerClusterMap.set(
    6,
    {
        name: 'Finance',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Risk Management',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Insurance',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Business Finance',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Human Resources',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)

CareerClusterMap.set(
    7,
    {
        name: 'Government & Public Administration',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Human Resources Management',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Criminal Justice',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Political Science',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Philisophy',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)

CareerClusterMap.set(
    8,
    {
        name: 'Health Science',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Athletic Training',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Biomathematics',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Sport Management',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Nursing',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)

CareerClusterMap.set(
    9,
    {
        name: 'Hospitality and Tourism',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Foreign Languages',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Sociology',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Marketing',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'International Studies',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)


CareerClusterMap.set(
    10,
    {
        name: 'Human Services',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Audiologist',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Speech Pathology',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Human Studies',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Communication Disorder Studies',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)



CareerClusterMap.set(
    11,
    {
        name: 'Information Technology',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Computer Science',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Web Development',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Computer Design',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Business Management Systems',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)

CareerClusterMap.set(
    12,
    {
        name: 'Law, Public Safety, Corrections & Security',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Computer Criminology',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Criminal Justice',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Foreign Languages',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Political Science',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)


CareerClusterMap.set(
    13,
    {
        name: 'Manufacturing',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Biochemistry',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Chemical Engineering',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Mechanical Engineering',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Industrial Engineering',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)

CareerClusterMap.set(
    14,
    {
        name: 'Marketing, Sales & Service',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Accounting',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Merchandising',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Product Development',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Professional Sales',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)


CareerClusterMap.set(
    15,
    {
        name: 'Science, Engineering, & Information Technology',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Applied Mathematics',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Electrical Engineering',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Chemical Engineering',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Industrial Engineering',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)


CareerClusterMap.set(
    16,
    {
        name: 'Transportation, Distribution & Logistics',
        image:'./Cluster_Pictures/Mathematics.png',
        final: null,
        SubClusters: 
        [
            {
                fieldID: 1,
                fieldName: 'Human Resources',
                fieldImageLink: '/Some/Other/Eng/Url',
                fieldSalary: '$918,000,239.43',
                fieldDescrip: 'Some engineer description',
                fieldGrowthRate: 'High',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 2,
                fieldName: 'Civil Engineering',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 3,
                fieldName: 'Business Management',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            },

            {
                fieldID: 4,
                fieldName: 'Real Estate3',
                fieldImageLink: '/Some/Other/Comp/Url',
                fieldSalary: '$918,000',
                fieldDescrip: 'Some comp sci description',
                fieldGrowthRate: 'Low',
                fieldEducationLevel: 'Bachelors Degree',
                //jobsOfField: []
            }
        ]
    }
)
//console.log(CareerClusterMap)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*                      CLUSTER ADD, EDIT, DELETE                                                           */
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Function to add a new cluster
// All it does is set a new cluster in the map
export function AddCluster (CareerClusterMap, ClusterName, ClusterImageLink) 
{
    //It is offset by 1 because it would be the # of clusters already there + one more for the new one being added
    let ClusterID = CareerClusterMap.size + 1;
    CareerClusterMap.set(
        ClusterID,
        {
            name:ClusterName,
            image:ClusterImageLink,
            SubClusters: [],
            final:null
        }
    )
}

//Function to update the name in a particular cluster  by inserted ID
export function UpdateClusterName (CareerClusterMap, NewClusterName, ClusterID) 
{
    CareerClusterMap.get(ClusterID).name = NewClusterName;
}


//Function to update the image link in a particular cluster by inserted ID
export function UpdateClusterImageLink (CareerClusterMap, NewImageLink, ClusterID) 
{
    CareerClusterMap.get(ClusterID).image = NewImageLink;
}

//Function to delete cluster by ID
//To preserve ID's, the entry will remain there, but all the other fields except for ID will be Null.  
export function DeleteCluster (CareerClusterMap, ClusterID)
{
    CareerClusterMap.get(ClusterID).name = null;
    //CareerClusterMap.get(ClusterID).image = null;
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
export function AddClusterField (CareerClusterMap, ClusterID, FieldName, FieldDescrip, FieldSalary, FieldGrowthR, FieldImageLink, FieldEdLevel) 
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


export function DeleteClusterField (CareerClusterMap, ClusterID, SubClusterID) 
{
    //The subcluster in question is offset by 1 to the ID.  Ex : If you want to delete field #2, you would be deleting the field at index [1], hence the -1
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldName = null;
    //CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldImageLink = null;
    //CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldSalary = null;
    //CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldDescrip = null;
    //CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldGrowthRate = null;
    //CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldEducationLevel = null;
}

//DeleteClusterField(CareerClusterMap, 1, 1);
//console.log(CareerClusterMap.get(1).SubClusters)


export function EditFieldName (CareerClusterMap, ClusterID, SubClusterID, NewFieldName) 
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldName = NewFieldName;
}

//EditFieldName (CareerClusterMap, 1, 1, 'Mickey Mouse');
//console.log(CareerClusterMap.get(1).SubClusters)


export function EditFieldImageLink (CareerClusterMap, ClusterID, SubClusterID, NewImageLink) 
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldImageLink = NewImageLink;
}

//EditFieldImageLink(CareerClusterMap, 1, 1, 'My New URL');
//console.log(CareerClusterMap.get(1).SubClusters)

export function EditFieldSalary (CareerClusterMap, ClusterID, SubClusterID, NewFieldSalary)
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldSalary = NewFieldSalary;
}

//EditFieldSalary(CareerClusterMap, 1, 1, '$101,901');
//console.log(CareerClusterMap.get(1).SubClusters);

export function EditFieldDescription (CareerClusterMap, ClusterID, SubClusterID, NewFieldDescrip)
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldDescrip = NewFieldDescrip;
}

//EditFieldDescription (CareerClusterMap, 1, 1, 'My new description test');
//console.log(CareerClusterMap.get(1).SubClusters);


export function EditFieldGrowthRate (CareerClusterMap, ClusterID, SubClusterID, NewFieldGrowthRate)
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldGrowthRate = NewFieldGrowthRate;
}

//EditFieldGrowthRate (CareerClusterMap, 1, 1, 'Medium');
//console.log(CareerClusterMap.get(1).SubClusters);

export function EditFieldEducationLevel (CareerClusterMap, ClusterID, SubClusterID, NewEducationLevel) 
{
    CareerClusterMap.get(ClusterID).SubClusters[SubClusterID - 1].fieldEducationLevel = NewEducationLevel;
}

//EditFieldEducationLevel (CareerClusterMap, 1, 1, 'Kindergarten');
//console.log(CareerClusterMap.get(1).SubClusters);


export function GetClusterNameByID (CareerClusterMap, ClusterID) 
{
    return CareerClusterMap.get(ClusterID).name;
}

export function GetClusterImageByID (CareerClusterMap, ClusterID) 
{
    return 'data:image/png;base64, ' + CareerClusterMap.get(ClusterID).image;
    //return CareerClusterMap.get(ClusterID).image;
}

export function GetFieldsByID (CareerClusterMap, ClusterID) 
{
    return CareerClusterMap.get(ClusterID).SubClusters;
}


export function GetFieldNameByIDS (CareerClusterMap, ClusterID, SubID)
{
    return CareerClusterMap.get(ClusterID).SubClusters[SubID].fieldName;
}

export function GetFieldImageByIDS (CareerClusterMap, ClusterID, SubID)
{
    return CareerClusterMap.get(ClusterID).SubClusters[SubID].fieldImageLink;
}





//require('./UserIcon.png')

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