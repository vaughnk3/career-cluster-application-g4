import React from 'react';
import './BottomRectangle.css';

const BottomRectangle = () => {
    return (
        <div className="bottom-rectangle">
            <div className="text-container"></div>
                <div className="blue-text">GET IN TOUCH</div>
                <div className="white-text">York County Regional Chamber of Commerce</div>
                <div className="white-text">116 E Main St. / PO Box 590</div>
                <div className="white-text">Rock Hill, SC, 29731</div>
                <div className="white-text">803-324-7500</div>
            <div/>
          <img src="./YCRCLogo.png" alt="Left Image" className="image left-image" />
          <img src="./Accredit.png" alt="Right Image" className="image right-image" />
        </div>
      );
};

export default BottomRectangle;