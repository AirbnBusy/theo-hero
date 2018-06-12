import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import ModalSS from '../ModalSS/ModalSS';
import ModalGal from '../ModalGal/ModalGal';
import Hero from '../Hero/Hero';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testImgSrc: 'https://s3-us-west-1.amazonaws.com/airbnbusy/photos/p00020.jpg',
    };
  }

  render() {
    return (
      <div>
        <Backdrop />
        <ModalSS />
        <ModalGal />
        <Hero testImgSrc={this.state.testImgSrc} />
      </div>
    );
  }
}

export default App;
