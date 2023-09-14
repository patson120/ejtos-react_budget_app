
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const { dispatch, currency } = useContext(AppContext);


    const handleChange = (event) => {

        if (event.target.value != "Currency..."){
            dispatch({
                type: 'CHG_CURRENCY',
                payload: event.target.value
            });
        }

    };

    return (
        <div className=" h-100 w-100">
            <select className="custom-select h-100 w-100 alert alert-success"
                id="" onChange={handleChange}>
                <option defaultValue value="currency" name="currency">Currency...</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="£" name="pround">£ Pround</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="r" name="ruppee">r Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;