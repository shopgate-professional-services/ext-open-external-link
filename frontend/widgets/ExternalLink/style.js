import { css } from 'glamor';

const wrapper = css({
  display: 'block',
}).toString();

/**
 * @param {string} imageHeight height
 * @param {string} imageWidth width
 * @returns {StyleAttribute}
 */
const image = (imageHeight, imageWidth) => css({
  height: imageHeight,
  width: imageWidth,
}).toString();

/**
 * @param {string} fontSize fontSize
 * @returns {StyleAttribute}
 */
const text = fontSize => css({
  fontSize,
}).toString();

export default {
  wrapper,
  image,
  text,
};
