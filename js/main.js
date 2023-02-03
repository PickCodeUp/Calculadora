
/// FUNCTIONS ///

/**Updates the calculator display by setting 
 * the value passed as a parameter*/
function setResult(value) { 
    document.getElementById('result').innerHTML = value;
}

/**Collects the value of the last result obtained, or of 
 * the mathematical expression to be calculated. 
 * the mathematical expression to be calculated, which is being 
 * displayed on the being displayed on the calculator screen*/
function getResult() {
    return(document.getElementById('result').innerHTML);
}

/**Add to the display the key pressed (for example, the digit
 * or the operation to be performed). If the display already contains 
 * data or the key pressed is not a digit, the * character of the key 
 * pressed will be added to the display.
 * character of the key pressed shall be added to the display. Otherwise 
 * (e.g. if the display is set to zero, and another digit is pressed), 
 * the contents of the display will be replaced with the key pressed */
function add(key) { 
    var result = getResult();
    if (result!='0' || isNaN(key)) setResult(result + key);
    else setResult(key);
}

/**Performs the calculation of the expression found on the screen 
 * (using the eval() function), and writes down the result*/
function calc() { 
    var result = eval(getResult()); 
    setResult(result);
}

/*Resets the contents of the calculator display to zero*/
function del() { 
    setResult(0);
}