import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/base/Layout";
import Home from "./components/blog/Home";

export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }
  render() {
    return (
      <Router>
        <Layout>
          <div className="site-container">
            <Home />
          </div>
        </Layout>
      </Router>
    );
  }
}
