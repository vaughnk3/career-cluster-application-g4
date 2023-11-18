import React from 'react';
import BottomRectangle from './pageTemplate/BottomRectangle.js';
import TopLeftLogo from './pageTemplate/TopLeftLogo.js'
import DemographicBox from './DemographicBox.js';
import UserIcon from './pageTemplate/UserIcon.js';

import './DemographicInfo.css';

const DemographicInfo = () => {
  return (
    <div>
      <h2>To gain access to the career cluster tool,</h2>
      <h2>please enter your demographic information below</h2> 
      <h3>(Fields marked with * are required)</h3>
      <TopLeftLogo/>
      <UserIcon/>
      <BottomRectangle/>
      <DemographicBox/>
    </div>
  );
}

export default DemographicInfo;
