import React from 'react';
import './DemographicBox.css';

const DemographicBox = () => {
  return ( 
    <div id="demographic-box">
      <div id="demographic-box-container">
        <div class="demographic-item">
          <h3>School *</h3>
          <select name="grade" id="grade">
           <option value="1">1</option>
          </select>
        </div>
        <div class="demographic-item">
          <h3>Desired Career Field</h3>
          <select name="grade" id="grade">
           <option value="1">1</option>
          </select>
        </div>
        <div class="demographic-item">
          <h3>Grade *</h3>
          <select name="grade" id="grade">
           <option value="1">1</option>
          </select>
        </div>
        <div class="demographic-item">
          <h3>Age</h3>
          <input type="number" id="fname" name="fname"></input>
        </div>
      </div>


      <a href="/cluster" id="submit-button">Submit</a>
    </div>
  );
};

export default DemographicBox;

//<button class="submit-button">Submit</button>