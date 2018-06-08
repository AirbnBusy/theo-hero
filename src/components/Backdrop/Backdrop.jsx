import React from 'react';
import styles from './Backdrop.css';

const Backdrop = ({ galleryModalShow, ssModalShow, toggleSSModal }) => {
  if (ssModalShow) {
    return (<div
      className={styles.show}
      onClick={toggleSSModal}
      role="presentation"
    />);
  } else if (galleryModalShow) {
    return <div className={styles.show} />;
  }
  return null;
};

export default Backdrop;
