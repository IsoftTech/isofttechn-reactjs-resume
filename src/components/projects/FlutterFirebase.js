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

import fcom1 from "../../images/projects/fcom1.PNG";
import fcom2 from "../../images/projects/fcom2.PNG";

class FlutterFirebase extends Component {
  render() {
    return (
      <div>
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <img
              src={fcom1}
              style={{ height: "400px", background: " center /cover" }}
            />
            <CardTitle style={{ color: "#000", textAlign: "center" }}>
              Flutter Ecommerce
            </CardTitle>

            <CardText>
              Flutter E-Commerce Starter is a mobile application template with lots of built-in components like sidebar, navigation, slider, cards, form elements, etc - all you need to start building your mobile app faster. 
            </CardText>
            <CardActions border>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/ecommerce-backend_frontend"
                  target="_blank"
                >
                  Github
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/ecommerce-backend_frontend"
                  target="_blank"
                >
                  Live Demo
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://github.com/IsoftTech/ecommerce-backend_frontend"
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

         
           </div>
      </div>
    );
  }
}

export default FlutterFirebase;
