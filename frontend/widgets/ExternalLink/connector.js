import { connect } from 'react-redux';
import { openPageExtern } from '@shopgate/engage/core';

/**
 * @returns {Object}
 */
const mapStateToProps = () => ({
  openPageExtern: (params) => {
    openPageExtern(params);
  },
});

export default connect(mapStateToProps);
