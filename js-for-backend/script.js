// Fundamentals of Javascript:
// arrays and objects
// functions return
// async js coding
// forEeach,map,filter,find,indexOf

//forEach()___________________
var arr1 = [1, 2, 3, 4];
arr1.forEach(function (val) {
  console.log(val + " Hello");
});

//map()__________________
var arr2 = [1, 2, 3, 4, 5];
var newArr2 = arr2.map(function (val) {
  return val * 2;
});
console.log(newArr2);

//filter()__________________
var arr3 = [1, 2, 3, 4, 4, 5];
var newArr3 = arr3.filter(function (val) {
  if (val === 4 || val === 5) {
    return true;
  } else {
    return false;
  }
});
console.log(newArr3);

//find()______________________
var arr4 = [1, 2, 3, 4, 5];
var newArr4 = arr4.find(function (val) {
  if (val === 4) {
    return true;
  } else {
    return false;
  }
});
console.log(newArr4);

//indexOf()____________________
var arr5 = [1, 2, 3, 4, 5];
var newArr5 = arr5.indexOf(4);
console.log(newArr5);
