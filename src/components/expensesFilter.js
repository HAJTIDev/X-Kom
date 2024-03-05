import React from "react";
import './ExpensesFilter.css';
const ExpesesFilter = (props) =>{
    const dropdownChangerHandle=(event)=>{
        props.onChangeFilter(event.target.value);
    };
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by Price</label>
                <select value={props.selected} onChange={dropdownChangerHandle}>
                    <option value="inf">Nielimitowane</option>
                    <option value="100">100</option>
                    <option value="250">250</option>
                    <option value="500">500</option>
                    <option value="750">750</option>
                    <option value="1000">1000</option>
                </select>
            </div>
        </div>
    );
};
export default ExpesesFilter;