import React from 'react';
import BottomRectangle from './pageTemplate/BottomRectangle.js';
import TopLeftLogo from './pageTemplate/TopLeftLogo.js'
import DemographicBox from './DemographicBox.js';
import UserIcon from './pageTemplate/UserIcon.js';



const DemographicInfo = () => {
  return (
    <div>
      <TopLeftLogo/>
      <UserIcon/>
      <BottomRectangle/>
      <DemographicBox/>
    </div>
  );
}

export default DemographicInfo;
