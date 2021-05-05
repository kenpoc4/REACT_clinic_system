import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  // Array dates
  const [dates, saveDates] = useState( [  ] );

  // Function that add new dates
  const createdDate = date => {
    saveDates([
      ...dates,
      date
    ]);
  }

  return (
    <Fragment>
      <h1>Pet Clinic Manager</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              createdDate={createdDate}
            />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
