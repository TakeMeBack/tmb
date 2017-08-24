import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <div className="App_content">
            <Header />
            <button onClick={()=>console.log(this.props)}>props</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const stateToProps = state => state;

export default connect(stateToProps)(App);
