function sumOdd(num){
  let result = 0;
  
  for(let i=0; i<=num; i++){
    if(i % 2 != 0){
      result += i;
    }
  }
  return result;
}

console.log(sumOdd(10));