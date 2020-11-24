function sumAllDigit(num){
  let result = 0;
  
 while(num>10){
   result += num%10;
   num = Math.floor(num/10)
 }
   result += num;

  return result;
}

console.log(sumAllDigit(432));