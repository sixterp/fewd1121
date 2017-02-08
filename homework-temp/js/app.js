var temp = 0;
var converted_temp = 0;
var units = 'F';
var converted_units = 'C';
var temp_input = $('#temp_input');
var units_input = $('#units_input');
var submit = $('#submit');
var output = $('#output');

submit.click(function(){
	units = units_input.val();
	temp = temp_input.val();

	if(units === 'F'){
		converted_units = 'C';
		converted_temp = (temp - 32) / 1.8;
		output.html(converted_temp + " &deg;" + converted_units);
	}else if(units === 'C'){
		converted_units = 'F';
		converted_temp = (temp * 1.8) + 32;
		output.html(converted_temp + " &deg;" + converted_units);
	}
});