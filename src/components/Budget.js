
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value <= (budget - totalExpenses)) {
            setNewBudget(event.target.value);
        }
    }
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-secondary h-100 w-100'>
            <span>Budget: {currency}{budget}</span>
            <input className='h-50 w-100' type="number" step="10"
            max='20000' value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;