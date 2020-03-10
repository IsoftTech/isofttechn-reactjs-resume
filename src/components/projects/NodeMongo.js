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

import avatar from "../../images/projects/h.jpg";

class NodeMongs extends Component {
  render() {
    return (
      <div>
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={avatar}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              Fullstack Ecommerce
            </CardTitle>

            <CardText>
              Complete ecommerce solution built with nodejs, reactjs and mongoDB
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>

            <CardMenu style={{ color: "#000" }}>
              <IconButton name="Share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={avatar}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              Fullstack Ecommerce
            </CardTitle>

            <CardText>
              Complete ecommerce solution built with nodejs, reactjs and mongoDB
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>

            <CardMenu style={{ color: "#000" }}>
              <IconButton name="Share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={avatar}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              Fullstack Ecommerce
            </CardTitle>

            <CardText>
              Complete ecommerce solution built with nodejs, reactjs and mongoDB
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>

            <CardMenu style={{ color: "#000" }}>
              <IconButton name="Share" />
            </CardMenu>
          </Card>
        </div>
      </div>
    );
  }
}

export default NodeMongs;
