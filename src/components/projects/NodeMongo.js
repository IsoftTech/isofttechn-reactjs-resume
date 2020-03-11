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

import ecom from "../../images/projects/ecom.PNG";

class NodeMongs extends Component {
  render() {
    return (
      <div>
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={ecom}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              Fullstack Ecommerce
            </CardTitle>

            <CardText>
              Complete ecommerce solution built with nodejs, reactjs and mongoDB
            </CardText>

            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/complete-ecommerce-app-with-nodejs-api"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/complete-ecommerce-app-with-nodejs-api"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/complete-ecommerce-app-with-nodejs-api"
                  target="_blank"
                >
                  Quick View
                </a>
              </Button>
            </CardActions>

            {/* <CardMenu style={{ color: "#000" }}>
              <IconButton name="Share" />
            </CardMenu> */}
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={ecom}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              Fullstack Ecommerce
            </CardTitle>

            <CardText>
              Complete ecommerce solution built with nodejs, reactjs and mongoDB
            </CardText>

            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/complete-ecommerce-app-with-nodejs-api"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/complete-ecommerce-app-with-nodejs-api"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/complete-ecommerce-app-with-nodejs-api"
                  target="_blank"
                >
                  Quick View
                </a>
              </Button>
            </CardActions>

            <CardMenu style={{ color: "#000" }}>
              <IconButton name="Share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={ecom}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              Fullstack Ecommerce
            </CardTitle>

            <CardText>
              Complete ecommerce solution built with nodejs, reactjs and mongoDB
            </CardText>

            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/complete-ecommerce-app-with-nodejs-api"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              {/* <Button colored>
                <a
                  href="https://github.com/IsoftTech/complete-ecommerce-app-with-nodejs-api"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button> */}
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/complete-ecommerce-app-with-nodejs-api"
                  target="_blank"
                >
                  Quick View
                </a>
              </Button>
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
