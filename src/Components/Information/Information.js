import React from 'react';
import './Information.css'
const Information = (props) => {
    //console.log(props)
    const {name,salary,email,phone,bloodGroup}=props.data
    return (
        <div className='data'>
            <div className='image'>
                <img src={props.data.img} alt=''/>
            </div>
                <div className='data-name'>
                    <h4>Name: {name}</h4>
                    <p> <small>Email: {email}</small></p>
                    <p> <small>Phone: {phone}</small></p>
                    <p> <small>Blodd group: {bloodGroup}</small></p>
                    <p> <small>salary: Tk {salary}</small></p>
                    <button onClick={()=>props.handleAddData(props.data)} className='btn' type='submit'>Add to salary</button>
                </div>
                
        </div>
    );
};

export default Information;