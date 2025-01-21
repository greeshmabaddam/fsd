function combinedSequence(arr) {
    const fibGen = fibonacci(); 
  
    let i = 0;
    while (i < arr.length || true) {
      if (i < arr.length) yield arr[i++]; 
      yield fibGen.next().value; 
    }
  }
  
  const arr = [1, 2, 3, 4];
  const combinedGen = combinedSequence(arr);
  
  for (let i = 0; i < 10; i++) {
    console.log(combinedGen.next().value);
  }
  