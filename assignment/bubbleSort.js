let arr = [100, 1, 0, 10, -10, 1];

function change(arr, first, second){
  let temp = arr[first];
  arr[first]=arr[second];
  arr[second]=temp;
}

function bubbleSort(inputArr){
  let len = inputArr.length, i, j, end;
  
  for(i=0 ; i<len ; i++){
    for(j=0, end=len-i ; j<end ; j++){
      if(inputArr[j]>inputArr[j+1]){
        change(arr, j, j+1)
      }
    }
  }
  return inputArr;
}

console.log(bubbleSort(arr));