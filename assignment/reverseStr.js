let str = 'I am string';

function reverseStr(str){
  let reStr = '';
  for(let i=str.length-1; i>=0; i--){
    reStr += str[i];
  }
  return(reStr);
}

console.log(reverseStr(str));