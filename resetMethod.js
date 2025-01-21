function ResettableIterator(arr) {
    this.arr = arr;
    this.index = 0;
  
    this[Symbol.iterator] = () => {
      this.index = 0;  
      return this;
    };
  
    this.next = () => {
      if (this.index < this.arr.length) {
        return { value: this.arr[this.index++], done: false };
      }
      return { done: true };
    };
  
    this.reset = () => {
      this.index = 0;
    };
  }
  
  const numbers = new ResettableIterator([1, 2, 3, 4]);
  
  for (let num of numbers) {
    console.log(num); 
  }
  
  numbers.reset();

  for (let num of numbers) {
    console.log(num); 
  }
  

  