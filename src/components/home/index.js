import React from "react";
import { connect } from "react-redux";

import { testAction } from "./actions";
import logo from "../../logo.svg";

const Home = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  test: state.home.test,
});

const mapDispatchToProps = {
  testAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
