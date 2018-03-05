import React from 'react';
import { connect } from 'react-redux';
import parseLinks from 'utils/parse-links';
// import './style.css';

const About = props => {
  const TITLE = props.page_data.about? props.page_data.about.Title.S : "";
  const TAG = props.page_data.about? props.page_data.about.Tag.S : "";
  const P1 = props.page_data.about? parseLinks(props.page_data.about.P1.S) : "";
  return(
    <div>
      <h1>{TITLE}</h1>
      <h3>{TAG}</h3>
      <div>{P1}</div>
    </div>
//   <div>
//   <h1>Take Me Back Radio</h1>
//   <h3>{"A SONIC JOURNEY THROUGH TIME AND SPACE"}</h3>
//   <div>
//     Take Me Back currently streams live on Tuesdays at 3:00p PST.
//     This website is currently under construction,
//     but in the meantime click on "episodes" to 
//     hear some past shows.
//   </div>
// </div>
)};


const stateToProps = state => state;

const dispatchToProps = dispatch => {
    return {
      
    }
}

export default connect(stateToProps, dispatchToProps)(About);