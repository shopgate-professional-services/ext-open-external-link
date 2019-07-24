import React from 'react';
import PropTypes from 'prop-types';
import connect from './connector';
import styles from './style';

/**
 * @returns {JSX}
 */
const ExternalLink = ({ settings, openPageExtern }) => {
  const {
    imgSource, linkText, link, imageHeight, imageWidth, fontSize,
  } = settings || null;
  if (!link) {
    return null;
  }

  /**
   * Opens external page
   */
  const handleClick = () => {
    openPageExtern({ src: link });
  };

  const imageLink = (
    <button onClick={handleClick}>
      <img className={styles.image(imageHeight, imageWidth)} alt="Configurabale" src={imgSource} />
    </button>);

  const textLink = (
    <button className={styles.text(fontSize)} onClick={handleClick}>
      {linkText}
    </button>
  );

  return (
    <div className={styles.wrapper}>
      {imgSource ? imageLink : textLink}
    </div>
  );
};

ExternalLink.propTypes = {
  openPageExtern: PropTypes.func.isRequired,
  settings: PropTypes.shape(),
};

ExternalLink.defaultProps = {
  settings: {},
};

export default connect(ExternalLink);
