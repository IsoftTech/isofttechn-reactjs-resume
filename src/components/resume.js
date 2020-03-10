import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import avatar from '../images/avatar.png'
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaWhatsapp from 'react-icons/lib/fa/whatsapp';
import FaGithub from 'react-icons/lib/fa/github';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



import { Icon, InlineIcon } from '@iconify/react';
import facebookMessenger from '@iconify/icons-fa-brands/facebook-messenger';

import mediumCircleFilled from '@iconify/icons-ant-design/medium-circle-filled';



export class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
        	<Cell col={4}>
        	<div className="resume-left-col">
        		<img src={avatar} />

        	</div>
        	<div className="resume-left-text">
        		<h2 style={{ textAlign: 'center'}}>Abraham William</h2>
        		<h4 style={{ textAlign: 'center'}}>Software Engineer</h4>
        		<hr style={{ textAlign: 'center'}} />
        		<p>Am a fullstack web and mobile app developer since 2016. I am expert in HTML, CSS, JavaScript, PHP, Laravel
                	Nodejs, Reactjs, Vuejs, Jquery, Nuxtjs, Flutter, MongoDB, Mysql, Firebase, AWS, Google Cloud Platform(GCP) and MS Azure.
                	Also, am actively doing my research in AI and IoT specifically, area of driverless cars and smart cities.
                </p>
                <hr style={{ textAlign: 'center'}} />
                <h3 style={{textAlign: 'center', fontFamily: 'sans-serif'}}>Conatct</h3>
                <div className="resume-right-social">
                <a href="https://api.whatsapp.com/send?phone=9036779231&text=Hi,%20thanks%20for%20messaging%20me.%20Please%20write%20all%20your%20messages%20here." target="_blank" rel="noopener noreferrer"><i style={{color: '#0dc043'}}> <FaWhatsapp /></i></a>
                <a href="http://m.me/IsoftTechn" target="_blank" rel="noopener noreferrer"><i style={{color: '#007fff'}} > <Icon icon={facebookMessenger} /></i></a>
                <a href="https://github.com/IsoftTech" target="_blank" rel="noopener noreferrer"><i style={{color: '#000'}} > <FaGithub /> </i></a>
                <a href="https://medium.com/@isofttechn" target="_blank" rel="noopener noreferrer"><i style={{color: '#000'}} > <Icon icon={mediumCircleFilled} /> </i></a>

                 <h3 style={{textAlign: 'center', fontFamily: 'sans-serif'}}>Hobies</h3>
                    <p style={{fontSize: '20px'}}>Coding, Reading, Singing, Travelling and meeting people </p>

                 </div>
                <hr style={{ textAlign: 'center'}} />
        	</div>

        	</Cell> 
        	<Cell className="resume-right-col" col={8}>
        		<div className="education-right-col">
        			<h2>Education</h2>
                    <Education 
						startYear={2016}
                        endYear={2019}
                        schoolName="HavardX University"
                        schoolDescription="Computer Science"/>

                        <Education 
                        startYear={2008}
                        endYear={2014}
                        schoolName="Techical College, Akwa State"
                        schoolDescription="Computer Science"
                        />

                         <Education 
                        startYear={2016}
                        endYear={2016}
                        schoolName="Bryta Innovatio Hub"
                        schoolDescription="fullstack Web Development"/>


                        <Education 
                        startYear={2018}
                        endYear={2018}
                        schoolName="IBM"
                        schoolDescription="Artificial Intelligence (AI)"/>


                        <Education 
                        startYear={2018}
                        endYear={2018}
                        schoolName="IBM"
                        schoolDescription="Web Development"/>
                         <hr />

                      <h2>Experience</h2>   
                        <Experience 
                        startYear={2016}
                        endYear={2016}
                        jobName="Bryta Innovation Hub"
                        jobDescription="Senior programmer, web developer, and instructor"/>

                        <Experience 
                        startYear={2017}
                        endYear={2018}
                        jobName="TD4PAI IoT Hub"
                        jobDescription="Senior API and web developer, instructor and mentor."/>


                        <Experience 
                        startYear={2019}
                        endYear={2019}
                        jobName="Sage Nigeria"
                        jobDescription="Web and mobile app instructor."/>

                        <hr />

                      <h2>Skills</h2>   
                        <Skills 
                            skill="HTML/CSS/JavaScript"
                            progress={100}
                        />

                         <Skills 
                            skill="Bootstrap/Jquery/Wowjs"
                            progress={90}
                        />

                         <Skills 
                            skill="Vuejs/Nuxtjs"
                            progress={85}
                        />

                        <Skills 
                            skill="React/Redux"
                            progress={85}
                        />

                         <Skills 
                        skill="WordPress: Woocommerce,  Theme & Plugins Development"
                        progress={90}
                    />

                     <Skills 
                        skill="PHP/Laravel"
                        progress={85}
                    />

                    <Skills 
                        skill="Nodejs/Express"
                        progress={80}
                    />  

                     <Skills 
                        skill="Flutter"
                        progress={75}
                    />

                    <Skills 
                        skill="Mysql"
                        progress={100}
                    />   

                    <Skills 
                        skill="MongoDB"
                        progress={75}
                    /> 

                    <Skills 
                        skill="Firebase"
                        progress={75}
                    />   

                    <Skills 
                        skill="AWS, GCP, MS Azure"
                        progress={75}
                    />                 

        		</div>
                 

        	</Cell>

        </Grid>
      </div>
    );
  }
}

export default Resume;
