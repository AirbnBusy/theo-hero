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
      showModalGallery: false,
      showModalShareSave: false,
    };
    this.modalGalleryHandler = this.modalGalleryHandler.bind(this);
    this.modalShareSaveHandler = this.modalShareSaveHandler.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  modalGalleryHandler() {
    this.setState(prevState => ({ showModalGallery: !prevState.showModalGallery }));
  }

  modalShareSaveHandler(e) {
    e.stopPropagation();
    this.setState(prevState => ({ showModalShareSave: !prevState.showModalShareSave }));
  }

  // need to get this working
  // might be tabIndex
  // will probably set handler on modals
  // onKeyDown={props.keyPressHandler}
  // keyPressHandler={e => this.keyPressHandler(e)}

  keyPressHandler(e) {
    console.log('key pressed');
    if (e.keyCode === 27) {
      this.setState({
        showModalGallery: false,
        showModalShareSave: false,
      });
    }
  }

  render() {
    return (
      <div>
        <Backdrop
          showModalGallery={this.state.showModalGallery}
          showModalShareSave={this.state.showModalShareSave}
          modalShareSaveHandler={e => this.modalShareSaveHandler(e)}
        />
        <ModalSS />
        <ModalGal
          showModalGallery={this.state.showModalGallery}
          modalGalleryHandler={this.modalGalleryHandler}
        />
        <Hero
          testImgSrc={this.state.testImgSrc}
          modalGalleryHandler={this.modalGalleryHandler}
          modalShareSaveHandler={this.modalShareSaveHandler}
        />
      </div>
    );
  }
}

export default App;
