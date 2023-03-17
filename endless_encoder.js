var previousValue = script.addIntParameter("My Int Param","Description of my int param",-1,-1,127);

function filter(inputs)
{
	script.log('Actual value : '+inputs[0] + ', Old value : '+ previousValue.get());

	if (inputs[0] == 127){
		var result = [1];
	} else if (inputs[0] == 0){
		var result = [0];
	} else if (inputs[0] > previousValue.get()){
		var result = [1];
	} else {
		var result = [0];
	}

	previousValue.set(inputs[0]);
	script.log(result[0]);
	return result;
}