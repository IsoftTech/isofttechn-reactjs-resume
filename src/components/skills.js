import React, { Component } from 'react';
import {Grid, Cell, ProgressBar } from 'react-mdl';

export class Skills extends Component {
  render() {
    return (
      <Grid> 
       	
       	<Cell col={12}>
       		
       	<div className="right-progress">
          {this.props.skill}
       		<ProgressBar style={{margin: 'auto', width: '75%'}} progress={this.props.progress} />
        
        </div>
       		
       	</Cell>
      </Grid>
    );
  }
}

export default Skills;
