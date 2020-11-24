let arr = [100, 1, 0, 10, -10, 1];

function selectionSort(inputArr){
  let len = inputArr.length;
  
  for(let i=0 ; i<len ; i++){
    let min = i;
    for(let j=i+1; j<len ; j++){
      if(inputArr[j] < inputArr[min]){
        min = j;
      }
    }
    if ( min != 1){
      let temp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = temp;
    }
  }
  return inputArr;
}

console.log(selectionSort(arr));