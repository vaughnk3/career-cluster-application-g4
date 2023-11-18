import React from 'react';
import './DemographicBox.css';

const DemographicBox = () => {
  return ( 
    <div id="demographic-box">
      <div id="demographic-box-container">
        <h3>Grade</h3>
        <select name="grade" id="grade">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
        </select>
        <h3>Grade</h3>
        <select name="grade" id="grade">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
        </select>
        <h3>Grade</h3>
        <select name="grade" id="grade">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
        </select>
        <h3>Grade</h3>
        <select name="grade" id="grade">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
        </select>
      </div>


      <a href="/cluster" id="submit-button">Submit</a>
    </div>
  );
};

export default DemographicBox;

//<button class="submit-button">Submit</button>