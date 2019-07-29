import React from 'react';
import PropTypes from 'prop-types';
import { openPageExtern } from '@shopgate/engage/core';
import styles from './style';

/**
 * @returns {JSX}
 */
const ExternalLink = ({ settings }) => {
  const {
    imgSource, linkText, link, imageHeight, imageWidth, fontSize,
  } = settings || {};
  if (!link) {
    return null;
  }
  let imageLink;
  let textLink;
  /**
   * Opens external page
   */
  const handleClick = () => {
    openPageExtern({ src: link });
  };

  if (imgSource) {
    imageLink = (
      <button onClick={handleClick}>
        <img className={styles.image(imageHeight, imageWidth)} alt="Configurable" src={imgSource} />
      </button>);
  }
  if (textLink) {
    textLink = (
      <button className={styles.text(fontSize)} onClick={handleClick}>
        {linkText}
      </button>
    );
  }

  return (
    <div className={styles.wrapper}>
      {imgSource ? imageLink : textLink}
    </div>
  );
};

ExternalLink.propTypes = {
  settings: PropTypes.shape(),
};

ExternalLink.defaultProps = {
  settings: {},
};

export default ExternalLink;
