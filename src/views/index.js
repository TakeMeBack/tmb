import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';
import Routes from './routes';
import style from './style.css';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <div>
          <div className={style.content}>
            <Header />
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
   }
}

export default connect(stateToProps, dispatchToProps)(App);
