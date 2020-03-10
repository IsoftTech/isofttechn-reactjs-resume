import React, { Component } from "react";

import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

import FlutterFirebase from "./projects/FlutterFirebase";
import LaravelPhp from "./projects/LaravelPhp";
import NodeMongs from "./projects/NodeMongo";
import WordPress from "./projects/WordPress";
import Reacts from "./projects/react";
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 1 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <NodeMongs />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <Reacts />
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <WordPress />
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <LaravelPhp />
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <FlutterFirebase />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          riple
        >
          <Tab>Nodejs/MongoDB</Tab>
          <Tab>Reactjs</Tab>
          <Tab>WordPress</Tab>
          <Tab>PHP/Laravel/Vues</Tab>
          <Tab>Flutter/Firebase</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
