import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

export class Experience extends Component {
  render() {
    return (
      <Grid>
       	<Cell col={4}>{this.props.startYear} - {this.props.endYear}</Cell>
       	<Cell col={8}>
       		
       			<h4> {this.props.jobName}</h4>
       			<p>{this.props.jobDescription}</p>
       		
       	</Cell>
      </Grid>
    );
  }
}

export default Experience;
