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

import cfba from "../../images/projects/cfba.png";
import en from "../../images/projects/en.png";
import hung from "../../images/projects/hun.png";

class WordPress extends Component {
  render() {
    return (
      <div>
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={en}
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
                <a href="https://enigeria.gov.ng" target="_blank">
                  Github
                </a>
              </Button>
              <Button colored>
                <a href="https://enigeria.gov.ng" target="_blank">
                  Live Demo
                </a>
              </Button>
              <Button colored>
                <a href="https://enigeria.gov.ng" target="_blank">
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
              src={hung}
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
                <a href="https://www.hunkybee.com/" target="_blank">
                  Github
                </a>
              </Button>
              <Button colored>
                <a href="https://www.hunkybee.com/" target="_blank">
                  Live Demo
                </a>
              </Button>
              <Button colored>
                <a href="https://www.hunkybee.com/" target="_blank">
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
              src={cfba}
              style={{ height: "250px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              React Business App
            </CardTitle>
            <CardActions border>
              <CardText>
                React Business web template. Built with reactjs, css, router,
                bootstrap
              </CardText>
              <Button colored>
                <a href="https://www.cfba.com.ng" target="_blank">
                  Github
                </a>
              </Button>
              <Button colored>
                <a href="https://www.cfba.com.ng" target="_blank">
                  Live Demo
                </a>
              </Button>
              <Button colored>
                <a href="https://www.cfba.com.ng" target="_blank">
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

export default WordPress;
