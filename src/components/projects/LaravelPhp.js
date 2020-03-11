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

import lar1 from "../../images/projects/lar1.PNG";
import lar2 from "../../images/projects/lar2.PNG";

class LaravelPhp extends Component {
  render() {
    return (
      <div>
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={lar1}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              Laravel Starter Template
            </CardTitle>

            <CardText>
              Laravel starter template is a multi - user manager
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/IsofttechStarterAdmin"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/IsofttechStarterAdmin"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/IsofttechStarterAdmin"
                  target="_blank"
                >
                  Quick View
                </a>
              </Button>
            </CardActions>

            {/* <CardMenu style={{ color: "#fff", fontSize: "10px !important" }}>
              <IconButton name="Share" />
            </CardMenu> */}
          </Card>

          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={lar1}
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
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/IsofttechStarterAdmin"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/IsofttechStarterAdmin"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/IsofttechStarterAdmin"
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
              src={lar2}
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
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/IsofttechStarterAdmin"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/IsofttechStarterAdmin"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/IsofttechStarterAdmin"
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
        </div>
      </div>
    );
  }
}

export default LaravelPhp;
