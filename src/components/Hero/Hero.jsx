import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import styles from './Hero.css';

const Hero = ({ testImgSrc }) =>
  (
    <div className={styles.container} style={{ backgroundImage: `url(${testImgSrc})` }}>
      <div className={styles['upper-button-box']}>
        <Button />
        <Button />
      </div>
      <div className={styles['lower-button-box']}>
        <Button />
      </div>
    </div>
  );

Hero.propTypes = {
  testImgSrc: PropTypes.string,
};

Hero.defaultProps = {
  testImgSrc: 'https://s3-us-west-1.amazonaws.com/airbnbusy/photos/p00022.jpg',
};

export default Hero;
