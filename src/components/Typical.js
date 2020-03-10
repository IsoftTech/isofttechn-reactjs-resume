import React, { Component } from 'react'
import Typical from 'react-typical'

export class Typicals extends Component {
  render () {
    return (
      <div className="typical-style">
      	<p style={{paddingBottom: '0px', marginBottom: '0px', fontSize: '26px'}}>Hi 👋</p>
        <Typical

        steps={[
        'My name is Abraham William ', '2000',
        'I am a fullstack web and mobile app developer since 2016. ', '2000',
         'I am expert in HTML/CSS/JavaScript ', '2000',
         'Boostrap/Jquery ', '2000' ,
         'React/Redux ', '2000',
         'Vue/Nuxtjs ',
         'PHP/Laravel ', '2000',
         'Nodejs/Express ', '2000',
         'Google Flutter ', '2000',
         'MongoDB/Mysql/Firebase' , '2000',
         'AWS/GCP/MS Azure ', '2000',
         'Also, am actively doing my research in AI and IoT specifically, area of driverless cars and smart cities.', '1000'
         
         
         ]}
        loop={Infinity}
        wrapper="p"
      />

      </div>
    )
  }
}


export default Typicals;