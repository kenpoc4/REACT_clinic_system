import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Date from './components/Date';

function App() {

  // Dates in local storage
  let datesInitials = JSON.parse( localStorage.getItem( 'dates' ) );
  if( !datesInitials ) {
    datesInitials = [];
  }

  // Array dates
  const [dates, saveDates] = useState( datesInitials );

  // Lisening  events in dates
  useEffect( () => {
    if( datesInitials ) {

      localStorage.setItem( 'dates', JSON.stringify( dates ) );
    } else {

      localStorage.setItem( 'dates', JSON.stringify( [] ) );
    }
  }, [dates, datesInitials] );

  // Function that add new dates
  const createdDate = date => {
    saveDates([
      ...dates,
      date
    ]);
  }

  // Function for delete date by ID
  const deleteDate = id => {
    const newDates = dates.filter(date => date.id !== id);
    saveDates(newDates);
  }

  // Conditional message
  const title = dates.length === 0 ? 'There is not appointments' : 'Manage your appointment';

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
            <h2>{title}</h2>
            {dates.map(date => (
              <Date 
                key={date.id}
                date={date}
                deleteDate={deleteDate}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
