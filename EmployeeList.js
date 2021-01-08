import {useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList(){
    const [employess,setEmployess]= useState([
        {
        name:"Yazeen Yasin",
        email:"kjhkj",
        phone:"1123", 
        skills:"jC",
        avatar:"https://i.imgur.com/t9HFQvX.png"
        },
        {name:"Teast Test", 
        email:"Test@gmail.com",
        phone:"0701123", 
        skills:"react",
        avatar:"https://i.imgur.com/Q9qFt3m.png"
        },
    ]);  
   
   function addEmp(){
       setEmployess((prevState) => {
           return[
               ...prevState,
               {
                   name:"Carolin",
                   email:"carolin@gmail.com",
                   phone:"07901123",
                   skills:"HTML",
                   avatar:"https://i.imgur.com/TUhCrsY.png"
                }
            ];

       });
   }
   
   return(
        <div>
        <h3>EmployeeList</h3>
        <button onClick={addEmp}>Add Employee</button>
        {employess.map((employee) => (
          < Employee EmployeeData={employee}/> 
         ))}
        </div>
    );
}

export default EmployeeList;