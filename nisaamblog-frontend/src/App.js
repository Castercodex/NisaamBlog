import React, { Component } from "react";
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
            <div className="site-container">
                <Layout>
                    <Home />
                </Layout>
            </div>
        );
    }
}