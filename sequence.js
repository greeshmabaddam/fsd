function createInfiniteIterator() {
    let current = 1;
    return {
      next: function() {
        return { value: current++, done: false }; // Always increment the value
      }
    };
  }
  
  const infiniteIterator = createInfiniteIterator();
  
  for (let i = 0; i < 10; i++) { // Limiting the output to 10 numbers for demonstration
    console.log(infiniteIterator.next().value); // Output: 1, 2, 3, ..., 10
  }
  