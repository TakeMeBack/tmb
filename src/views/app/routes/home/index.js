import React from 'react';
import { connect } from 'react-redux';
import parseLinks from '../../../../utils/parseLinks';
// import './style.css';

const Home = props => {
  const TITLE = props.page_data.home? props.page_data.home.Title.S : "";
  const TAG = props.page_data.home? props.page_data.home.Tag.S : "";
  const P1 = props.page_data.home? parseLinks(props.page_data.home.P1.S) : "";
  return(
    <div>
      <h1>{TITLE}</h1>
      <h3>{TAG}</h3>
      <div>{P1}</div>
    </div>
)}


const stateToProps = state => state;

const dispatchToProps = dispatch => {
    return {
      
    }
}

export default connect(stateToProps, dispatchToProps)(Home);