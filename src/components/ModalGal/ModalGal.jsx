import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentPhoto from '../CurrentPhoto/CurrentPhoto';
import PhotoList from '../PhotoList/PhotoList';
import styles from './ModalGal.css';

class ModalGal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhoto: 'https://s3-us-west-1.amazonaws.com/airbnbusy/photos/p00020.jpg',
    };
  }

  renderModal() {
    return (
      <div className={styles.container}>
        <div className={[styles['close-control-bar'], styles.controls].join(' ')}>
          <span className={styles['close-gallery']}>&times;</span>
        </div>
        <CurrentPhoto currentPhoto={this.state.currentPhoto} />
        <PhotoList />
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
