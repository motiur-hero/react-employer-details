import React from 'react';
import './Salary.css';


const Salary = (props) => {
    const salary= props.salary
//const total =salary.reduce((total,slr)=> total+slr.salary,0)
let total= 0;
for (let i = 0; i < salary.length; i++) {
    const slr = salary[i];
    total = total+slr.salary
    
}
const Conveyence = total*0.10;
const health = total*0.03

    return (
        
        <div className='count'>
            <h4>Mothly Salary Report Employers:</h4>
            <h3>Add Employers :{salary.length}</h3>
            <p>Conveyence: Tk. {Conveyence}</p>
            <p><amall>Health:Tk.  {health}</amall></p>
            <p>Total : Tk. {total + health + Conveyence}</p>
        </div>
    );
};

export default Salary;