import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Hero.css';

const Hero = ({ heroImgURI, modalGalleryHandler, modalShareSaveHandler }) =>
  (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${heroImgURI})` }}
      onClick={modalGalleryHandler}
      role="presentation"
    >
      <div className={styles['upper-button-box']}>
        <Button clicked={modalShareSaveHandler} />
        <Button clicked={modalShareSaveHandler} />
      </div>
      <div className={styles['lower-button-box']}>
        <Button clicked={() => {}} />
      </div>
    </div>
  );

Hero.propTypes = {
  heroImgURI: PropTypes.string.isRequired,
  modalGalleryHandler: PropTypes.func.isRequired,
  modalShareSaveHandler: PropTypes.func.isRequired,
};

export default Hero;
