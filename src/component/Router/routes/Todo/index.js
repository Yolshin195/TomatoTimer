import React from 'react';

import Todo from '../../../Todo';
import Timer from '../../../Timer';

const RouterTodo = () => {
  return(
    <div className="row">
      <div className="col s5">
        <Timer/>
      </div>
      <div className="col s7">
        <Todo/>
      </div>
    </div>
  )
}

export default RouterTodo;
