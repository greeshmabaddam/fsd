function* cumulativeSum(arr) {
    let sum = 0;
    for (let num of arr) {
      sum += num;
      yield sum; 
    }
    return sum; 
  }
  
  const arr = [1, 2, 3, 4];
  const sumGen = cumulativeSum(arr);
  
  let result = sumGen.next();
  while (!result.done) {
    console.log(result.value); 
    result = sumGen.next();
  }
  console.log('Final sum:', result.value); 
  