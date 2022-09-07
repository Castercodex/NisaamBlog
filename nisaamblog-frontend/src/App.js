import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/base/Layout";
import Home from "./components/blog/Home";
import Register from "./components/authentication/Register";
export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              <Layout
                children={
                  <div className="site-container">
                    <Home />
                  </div>
                }
              />
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    );
  }
}
