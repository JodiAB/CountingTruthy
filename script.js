  // Creating an array of boolean values
  var booleanArray = [true, false, true, true, false, false, true, true];

  // Counting the number of true values in the array
  var trueCount = booleanArray.filter(value => value === true).length;

  // Displaying the result
  var output = "Boolean Array: " + JSON.stringify(booleanArray, null, 2) + "\n\n" +
               "Number of true values: " + trueCount;

  document.getElementById("output").textContent = output;
