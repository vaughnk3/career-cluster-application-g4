import React from 'react';
import BottomRectangle from './pageTemplate/BottomRectangle.js';
import TopLeftLogo from './pageTemplate/TopLeftLogo.js'
import DemographicBox from './DemographicBox.js';


const DemographicInfo = () => {
  return (
    <div>
      <TopLeftLogo/>
      <BottomRectangle/>
      <DemographicBox/>
    </div>
  );
}

export default DemographicInfo;
