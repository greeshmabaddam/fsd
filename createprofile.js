function createProfile(profile) 
{ 
    const { name, email } = profile; 
     return { name, email }; 
}
     const profile = { name: 'John', age: 30, email: 'john@example.com', address: '123 St' }; 
     console.log(createProfile(profile));
