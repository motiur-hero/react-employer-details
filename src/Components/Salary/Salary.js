import React from 'react';
import './Salary.css';


const Salary = (props) => {
    const salary= props.salary
const total =salary.reduce((total,slr)=> total+slr.salary,0)
    return (
        <div>
            <h3>Salary Add Person :{salary.length}</h3>
    <p>total : {total}</p>
        </div>
    );
};

export default Salary;