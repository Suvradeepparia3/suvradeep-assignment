function sumAllDigit(num){
  let result = 0;
  
 while(num){
   result += num%10;
   num = Math.floor(num/10);
 }
  return result;
}

console.log(sumAllDigit(100));
