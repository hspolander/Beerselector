import React from 'react';
import { connect } from 'react-redux';

import ViewBeers from './components/viewBeers';

const Client = () => (
  <div>
    <ViewBeers />
  </div>
);

export default connect(
  null,
  null,
)(Client);
