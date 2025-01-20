const person = { name: 'grree', address: { street: '123 Main St', city: 'hayth', zip: '90001' }, age: 25 }; 
 const { address: { street, city } } = person; 
 console.log(street); 
 console.log(city);