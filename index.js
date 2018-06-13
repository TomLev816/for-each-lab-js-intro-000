function iterativeLog(element, index, array){
  array.forEach(console.log(`${index}: ${element}`));
}

function iterate(callback){
  var myArray = ['NYC', 'SF', 'LA', 'DC']
  myArray.forEach(callback)
  return myArray
}

function doToArray(array,callback){
  array.forEach(callback);
}
