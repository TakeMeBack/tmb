import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';
import Routes from './routes';
import './style.css';

import { PING, PONG } from '../../store/ping/actions';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div>
          <div className="App_content">
            <Header />
            <button onClick={()=>console.log(this.props)}>props</button>
            <button onClick={this.props.makePing.bind(this)}>
              {this.props.ping.isPinging? "PONG" : "PING"}
            </button>
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
  // console.log(PING, PONG);
   return {
     makePing: () => {dispatch(PING)},
     makePong: () => {dispatch(PONG)},
   }
}
//   {
//   ping: ()=>dispatch(PING()),
//   pong: ()=>dispatch(PONG()),
// })};

export default connect(stateToProps, dispatchToProps)(App);
