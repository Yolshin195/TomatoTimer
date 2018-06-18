import React from 'react';

import Timer from '../../../Timer';
import Settings from '../../../Settings';

const RouterSettings = () => {
  return(
    <div className="row">
      <div className="col s8">
        <Timer/>
      </div>
      <div className="col s4">
        <Settings/>
      </div>
    </div>
  )
}

export default RouterSettings;
