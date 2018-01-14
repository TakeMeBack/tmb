import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';
import Routes from './routes';
import style from './style.css';

import { PING, PONG } from '../../store/ping/actions';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className={style.app}>
        <div>
          <div className={style.content}>
            <Header />
            {/* <button onClick={()=>console.log(this.props)}>props</button> */}
            <Routes/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
 
const stateToProps = state => state;

const dispatchToProps = dispatch => {
   return {
     makePing: () => {dispatch(PING)},
     makePong: () => {dispatch(PONG)},
   }
}

export default connect(stateToProps, dispatchToProps)(App);
