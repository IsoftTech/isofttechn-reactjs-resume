import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import { faGithub, faFacebook, faSkype } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';


import abrahampic from '../images/avatar.png';
export class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                	<Cell col={6}>
                	    <h2>Abraham William</h2>

                        <img src={abrahampic}  />

                        <p> Am a fullstack web and mobile app developer since 2016. I am expert in HTML, CSS, JavaScript, PHP, Laravel
                    Nodejs, Reactjs, Vuejs, Jquery, Nuxtjs, Flutter, MongoDB, Mysql, Firebase, AWS, Google Cloud Platform(GCP) and MS Azure.
                    Also, am actively doing my research in AI and IoT specifically, area of driverless cars and smart cities.
                </p>
                	</Cell>

                
                	<Cell col={6}>
                		<h2>Contact Me</h2>
                		<hr/>

                		<div className="contact-list">
                		<List>
                			<ListItem >
                				<ListItemContent ><i> <FontAwesomeIcon icon={faFacebook} /></i> IsoftTechn  </ListItemContent>
                				
                			</ListItem>

                			<ListItem >
                				<ListItemContent ><i> <FaPhoneSquare /></i> +2349036779231  </ListItemContent>
                				
                			</ListItem>

                			<ListItem>
                				<ListItemContent><i> <FontAwesomeIcon icon={faGithub} /></i>IsoftTech </ListItemContent>
                				 
                			</ListItem>

                			<ListItem>
                				<ListItemContent ><i><FontAwesomeIcon icon={faSkype}/></i>isofttechn@gmail.com</ListItemContent>
                				
                			</ListItem>

                		</List>
                		</div>
                	</Cell>
                	
                </Grid>
            </div>
        )
    }
}

export default Contact;
