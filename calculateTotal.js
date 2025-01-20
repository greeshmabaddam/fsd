function calculateTotal(...numbers)
 {
     return numbers.reduce((total, num) => total + num, 0); 
    } 
 console.log(calculateTotal(10, 20, 30, 40)); 