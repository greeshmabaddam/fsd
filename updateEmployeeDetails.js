function updateEmployeeDetails(employee, newRole)
 { 
    return {...employee, role: newRole};
 }
   const employee = {name: 'greeshma', role: 'Developer', age: 20, location: 'IN'}; 
   console.log(updateEmployeeDetails(employee, 'Senior Developer')); 