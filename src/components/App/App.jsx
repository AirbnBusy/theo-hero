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
      galleryModalShow: false,
      ssModalShow: false,
    };
    this.toggleSSModalHandler = this.toggleSSModalHandler.bind(this);
  }

  toggleSSModalHandler() {
    this.setState({ ssModalShow: !this.state.ssModalShow });
  }

  render() {
    return (
      <div>
        <Backdrop
          galleryModalShow={this.state.galleryModalShow}
          ssModalShow={this.state.ssModalShow}
          toggleSSModal={this.toggleSSModalHandler}
        />
        <ModalSS />
        <ModalGal />
        <Hero testImgSrc={this.state.testImgSrc} />
      </div>
    );
  }
}

export default App;
