import React, { Component } from "react";
import { faGithub, faLinkedin, faFacebook, faYoutube, } from "@fortawesome/free-brands-svg-icons";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import {FontAwesomeIcon, FaGithub, FaReddit, FaBitcoin, FaSync } from 'react-icons/fa';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon, InlineIcon } from '@iconify/react';
import facebookMessenger from '@iconify/icons-fa-brands/facebook-messenger';
import FaWhatsapp from 'react-icons/lib/fa/whatsapp';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';


import { Grid, Cell } from "react-mdl";
import avatar from '../images/avatar.png'
import Spinner from './layout/Spinner';
import Typicals from './Typical';

 const loading = false;

export class Landing extends Component {


  render() {

     if(loading) {
       return <Spinner />
      }else{
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={avatar} alt="Avatar" className="avatar-img" />
            <div className="banner-text" >

              <h1>Full Stack Web & Mobile App Developer</h1>
              <hr/>

              <Typicals />


              <p> HTML/CSS | Bootstrap | JavaScript |
               Reactjs 
               | Vuejs 
               | Nodejs 
               | Express
               | MongoDB 
               | PHP/Laravel 
               | Mysql 
               | Flutter 
               | Firebase </p>

               <div className="social-links">
                  { /* linkedin */ }
                <a href="https://www.linkedin.com/in/abraham-william-63a875151/" target="_blank" rel="noopener noreferrer">
               <i> <FontAwesomeIcon icon={faLinkedin} /></i>
                </a>

                 { /* Github */ }
                <a href="https://github.com/IsoftTech" target="_blank" rel="noopener noreferrer">
                        
                  <i> <FontAwesomeIcon icon={faGithub} /></i></a>

              { /* Facebook */ } 
                <a href="http://facebook.com/Isofttehn" target="_blank" rel="noopener noreferrer">
               <i> <FontAwesomeIcon icon={faFacebook} /></i>
                </a>

                 { /* Messanger */ }
                <a href="http://m.me/IsoftTechn" target="_blank" rel="noopener noreferrer">
               <i> <Icon icon={facebookMessenger} /></i>
                </a>
                  { /* Whatsapp */ }
                 <a href="https://api.whatsapp.com/send?phone=9036779231&text=Hi,%20thanks%20for%20messaging%20me.%20Please%20write%20all%20your%20messages%20here." target="_blank" rel="noopener noreferrer"><i style={{color: '#0dc043'}}> <FaWhatsapp /></i></a>
               </div>

            </div>
          </Cell>
        </Grid>
      </div>
      
    );
    }
  }
}

export default Landing;
