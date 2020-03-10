import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';

export class Education extends Component {
  render() {
    return (
      <Grid>
       	<Cell col={4}>{this.props.startYear} - {this.props.endYear}</Cell>
       	<Cell col={8}>
       		<div className="education-right">
       			<h4> {this.props.schoolName}</h4>
       			<p>{this.props.schoolDescription}</p>
       		</div>
       	</Cell>
      </Grid>
    );
  }
}

export default Education;
