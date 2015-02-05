function sum(array) {

    /* Function sums up numbers in an array */
	var count = 0 ;
	for (var i = 0 ; i < array.length ; i++) { 
		count += array[i];
	}

	return count;
}

function range(start, end, step) {

    /* Declaring array */
	var _numberArray = [];

    /* If "step" is not defined, it's either +1 or -1, depending if the count is going up or down */
	if (!step) {
       
        	if (start > end) {
            		step = -1;
        	}
        
        	else {
			step = 1;
        	}
	}

    /* If "step" is defined, loop builds the array, using the argument "start" as a start point */
    /* Goes up or down depending if the step is positive or negative */
    
	if (step < 0) {

		for (var i = start ; i >= end ; i += step) {
			_numberArray.push(i);
		}
	}

	else { 
		for (var i = start ; i <= end ; i += step ) {
			_numberArray.push(i)
		}
	}
	
	/* If range is nonsensical, the array will remain empty. Delivery error message */
	if (_numberArray[0] === undefined ) {
	    _numberArray = "Cannnot calculate range. Remember: 1st  number is START, 2nd is END, 3rd is the STEP.";
	}

    /* Return results */
	return _numberArray;

}
