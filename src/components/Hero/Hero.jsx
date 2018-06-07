import React, { Component } from 'react';
import Button from '../Button/Button';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="hero-container">
        <h1> Hero Component </h1>
        <div className="upper-buttons">
          <Button />
          <Button />
        </div>
        <div className="lower-button">
          <Button />
        </div>
      </div>
    );
  }
}

export default Hero;
