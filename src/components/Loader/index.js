import React from 'react';

import { Loading } from './styles';

function Loader() {
  return (
    <Loading>
        <div className="spinner"></div>
    </Loading>
  );
}

export default Loader;