const reverseIterator = {
    arr: [1, 2, 3, 4],
    [Symbol.iterator]: function() {
      let index = this.arr.length - 1; 
      return {
        next: () => {
          if (index >= 0) {
            return { value: this.arr[index--], done: false };
          }
          return { done: true }; 
        }
      };
    }
  };
  
  for (let value of reverseIterator) {
    console.log(value); 
  }
  