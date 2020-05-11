import React from 'react';
import FakeData from '../../FakeData/Index'
import {useState} from 'react';
import './Data.css'
import Information from '../Information/Information'
import Salary from '../Salary/Salary'

const Data = () => {
    const info = FakeData;
    const [data, setData] = useState(info);
    const [salary, setSalary] = useState([]);
    
    const handleAddData = (data) => {
        //console.log('asce',data)
        const newSalary = [...salary,data]
        setSalary(newSalary)
    }
    
   
    
    return (
        <div className='data-container'>
            
            <div className='info-container'>      
            {
            data.map(element =><Information 
                data={element}
                handleAddData={handleAddData}
            
            ></Information>)
            }
            </div>

                 <div className='salary-container'>
               <Salary salary={salary}></Salary>
                </div> 
        </div>
        
    );
};

export default Data;