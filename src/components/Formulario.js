import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/v4';

const Formulario = ( {createdDate} ) => {

    // Create the state of dates
    const [date, updateDate] = useState ({
        pet:'',
        name:'',
        consult:'',
        time:'',
        symptom:''
    });
    const [error, updateError] = useState(false);

    // Function that is running when the user writte in a input
    const updateState = e => {
        updateDate({
            ...date,
            [e.target.name]: e.target.value
        })
    }

    // Extract values
    const { pet, name, consult, time, symptom } = date;

    // When the user send form
    const submitDate = e => {
        e.preventDefault();

        // Validate
        if( pet.trim() === '' || name.trim() === '' || consult.trim() === '' || time.trim() === '' || symptom.trim() === '' ) {
            updateError(true);
            return;
        }
        updateError(false);

        // Assign ID
        date.id = uuid();

        // Create date
        createdDate(date);

        // Restart form
        updateDate({
            pet:'',
            name:'',
            consult:'',
            time:'',
            symptom:''
        })
    }

    return ( 
        <Fragment>

            <h2>Register date</h2>

            {
                error
                ?
                <p className="alerta-error">All fields are Obligatory</p>
                :
                null
            }

            <form
                onSubmit={submitDate}
            >
                <label>Baby name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Pet's Name"
                    onChange={updateState}
                    value={pet}
                />
                <label>Daddy/Mommy's name</label>
                <input
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder="Pet's owner"
                    onChange={updateState}
                    value={name}
                />
                <label>Date</label>
                <input
                    type="date"
                    name="consult"
                    className="u-full-width"
                    onChange={updateState}
                    value={consult}
                />
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={updateState}
                    value={time}
                />
                <label>Symptom</label>
                <textarea
                    className="u-full-width"
                    name="symptom"
                    onChange={updateState}
                    value={symptom}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Add date</button>
            </form>

        </Fragment>
    );
}
 
export default Formulario;