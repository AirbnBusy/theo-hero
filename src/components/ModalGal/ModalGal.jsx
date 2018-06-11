import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentPhoto from '../CurrentPhoto/CurrentPhoto';
import PhotoList from '../PhotoList/PhotoList';
import X from '../X/X';
import Left from '../Left/Left';
import Right from '../Right/Right';
import styles from './ModalGal.css';


class ModalGal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photosInfo: this.props.photosInfo,
      currentPhoto: this.props.photosInfo[0].uri,
    };
  }

  renderModal() {
    return (
      <div className={styles.container}>
        <div className={[styles['close-control-bar'], styles.controls].join(' ')}>
          <X />
        </div>
        <Left />
        <Right />
        <CurrentPhoto currentPhoto={this.state.currentPhoto} />
        <PhotoList photosInfo={this.state.photosInfo} />
      </div>
    );
  }

  render() {
    {return this.props.showModalGallery ? this.renderModal() : null}
  }
}

ModalGal.propTypes = {
  showModalGallery: PropTypes.bool.isRequired,
};

export default ModalGal;
