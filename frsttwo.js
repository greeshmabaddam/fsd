function createProfile(profile)
 { 
    const { name, age, interests } = profile; 
    const [primaryInterest, secondaryInterest] = interests; 
     return { name, age, primaryInterest, secondaryInterest }; 
    }
     const profile = { name: 'John', age: 25, interests: ['Reading', 'Traveling', 'Cooking'] };
      console.log(createProfile(profile));
