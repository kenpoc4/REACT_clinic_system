import React from 'react';
import PropTypes from 'prop-types';

const Date = ({ date, deleteDate }) => (
    <div className="cita">
        <p>Pet: <span>{ date.pet }</span></p>
        <p>Owner: <span>{ date.name }</span></p>
        <p>Consult: <span>{ date.consult }</span></p>
        <p>Time: <span>{ date.time }</span></p>
        <p>Symptom: <span>{ date.symptom }</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={ () => deleteDate(date.id) }
        >Delete &times;</button>
    </div>
);
 
Date.propTypes = {
    date: PropTypes.object.isRequired,
    deleteDate: PropTypes.func.isRequired
}

export default Date;