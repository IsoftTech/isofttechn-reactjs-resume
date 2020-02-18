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
              Enigeria Conference Manament System
            </CardTitle>

            <CardText>
              eNigeria conference management system initially built with nodejs and angular, then change to wordpress
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/IsoftTech/nigeria" target="_blank">
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
              HunkyBee - Online Store India 
            </CardTitle>

            <CardText>
              is an online clothing store that sells kurtis, western wear, men's tees, jumpsuits, sarees, etc and is headquartered at Hyderabad.
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
              Christ Foundation Basic Academy
            </CardTitle>
            <CardActions border>
              <CardText>
                Christ foundation basic academy built with wordPress and PHP. It includes school management system for 
                managing school activities, staff, students and parents
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
