import React, { Component } from "react";

import {
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

import pic1 from "../../images/projects/pic1.PNG";
import pr1 from "../../images/projects/pr1.png";

class FlutterFirebase extends Component {
  render() {
    return (
      <div>
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={pr1}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              React Business App
            </CardTitle>

            <CardText>
              React Business web template. Built with reactjs, css, router,
              bootstrap
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
              <Button colored>Quick View</Button>
            </CardActions>

            {/* <CardMenu style={{ color: "#fff", fontSize: "10px !important" }}>
              <IconButton name="Share" />
            </CardMenu> */}
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={pic1}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              React Github User Finder
            </CardTitle>

            <CardText>
              React github user finder is a web app that allow finding, of
              users, repos and other details
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
              <Button colored>Quick View</Button>
            </CardActions>

            {/* <CardMenu style={{ color: "#000" }}>
              <IconButton name="Share" />
            </CardMenu> */}
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={pr1}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              React Business App
            </CardTitle>

            <CardText>
              React Business web template. Built with reactjs, css, router,
              bootstrap
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
              <Button colored>Quick View</Button>
            </CardActions>

            {/* <CardMenu style={{ color: "#000" }}>
              <IconButton name="Share" />
            </CardMenu> */}
          </Card>
        </div>
      </div>
    );
  }
}

export default FlutterFirebase;
