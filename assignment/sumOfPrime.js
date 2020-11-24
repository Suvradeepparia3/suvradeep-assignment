function isPrimeValid(num){
  for(let i=2; i<num; i++){
    if(num % i === 0){
      return false;
    }
  }
   return true;
}

function sumPrime(val){
  let result = 0;
  
  for(let i=2; i<=val; i++){
    if(isPrimeValid(i)){
      result += i;
    }
  }
  return result;
}

console.log(sumPrime(10));