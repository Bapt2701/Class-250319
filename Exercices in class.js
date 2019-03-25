
//  targil 1 : enter a positive number between 0 and 10 and print the factorial.


var x = parseInt(prompt("please enter positive number", -1))
var y

while (x < 0)
  {
    var x = parseInt(prompt("please enter positive number", -1))
  }

y = x

while (x > 1)
  {
    y = y * (x - 1)
    x = x - 1
  }

console.log (y)





//  targil 2 : 
var size = Math.floor(Math.random() * 11) + 10
var arr1 = []
var arr2 = []


var x = Math.floor(Math.random() * 201) - 100
console.log(x)





var x = parseInt(prompt("Enter number:"))
while (x <= 0)
  {
    x = parseInt(prompt("Enter number:"))
  }

var atz = 1
for(var i = 1; i <= x; i = i + 1)
  {
    atz = atz * i
  }
console.log(atz)



var size = Math.floor(Math.random() * 11) + 10 // 10-20
var arr1 = []
var arr2 = []

for(var i = 0; i < size; i++)
  {
	    var number1 = Math.floor(Math.random() * 201) - 100 // -100 to +100
      arr1.push(number1)
    
	    var number2 = Math.floor(Math.random() * 201) - 100 // -100 to +100
      arr2.push(number2)    
  }

var mone1 = 0
var mone2 = 0

for(var i = 0; i < size; i++)
  {
		if (arr1[i] > arr2[i])
      {
        mone1++
      }
    else if (arr2[i] > arr1[i])
      {
        mone2++
      }
    else
    {
      // tie
    }
  }

if (mone1 > mone2){
  console.log("arr1 won!")
}
else if (mone2 > mone1){
  console.log("arr2 won!")
}
else  {
    console.log("tie!")
  }




var x = parseInt(prompt("Enter number:"))
var m = 2

while (x % m != 0)
  {
    m++
  }

if (m == x)
  {
    console.log("rishoni")
  }
else
  {
    console.log("not rishoni")
  }
