import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import ModalSS from '../ModalSS/ModalSS';
import ModalGal from '../ModalGal/ModalGal';
import Hero from '../Hero/Hero';
import dummyData from '../../../dummyData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    // {console.log('dummyData', dummyData)}
    // {console.log('heroImg', dummyData[0].uri)}
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
          photosInfo={dummyData}
        />
        <Hero
          heroImgURI={dummyData[0].uri}
          modalGalleryHandler={this.modalGalleryHandler}
          modalShareSaveHandler={this.modalShareSaveHandler}
        />
      </div>
    );
  }
}

export default App;
