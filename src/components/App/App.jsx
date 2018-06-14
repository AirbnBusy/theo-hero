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
      showShareBox: false,
      showSaveBox: false,
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
    const label = e.target.textContent;
    this.setState(prevState => ({ showModalShareSave: !prevState.showModalShareSave }));
    (this.state.showShareBox || this.state.showSaveBox) ?
    this.setState({ showShareBox: false, showSaveBox: false }) :
    this.setState(prevState => ({ [`show${label}Box`]: !prevState[`show${label}Box`] }));
  }

  keyPressHandler(e) {
    console.log('event', e);
    if (e.charCode === 27) {
      this.setState({
        showModalGallery: false,
        showModalShareSave: false,
        showShareBox: false,
        showSaveBox: false,
      });
    }
  }

  render() {
    return (
      <div>
        <Backdrop
          showModalGallery={this.state.showModalGallery}
          showModalShareSave={this.state.showModalShareSave}
          modalShareSaveHandler={this.modalShareSaveHandler}
          keyPressHandler={this.keyPressHandler}
        />
        <ModalSS
          showModalShareSave={this.showModalShareSave}
          showShareBox={this.state.showShareBox}
          showSaveBox={this.state.showSaveBox}
          heroImgURI={dummyData[0].uri}
          modalShareSaveHandler={this.modalShareSaveHandler}
        />
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
