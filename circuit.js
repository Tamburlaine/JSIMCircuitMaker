var circuit = function(){

	var Model = function(Div){
		
		//counts the number of elements in the circuit from the parsed text
		var elCounter = function(text){
			//should parse the text into nice little tokens for us
			parsed = parser.decomment(parser.line_extend(parser.split(text)))
			console.log(parsed)
			
			return parsed
		}
		
		return {elCounter:elCounter}
	}
	
	var View = function(div, model){
		
		//initializes the screen's display
		var buildDisplay=function(){
			div.append("Circuit:");
			
			var circuitInp = $('<br><textarea class = "circuitInp" id = circuitInp width = 200px height = 100px>JSIM code goes here</textarea><br>');
			var circuitButt = $('<button class = "circuitButt">Click!</button>');
			
			//we're having problems with onclick
			circuitButt.onclick=function(){
				console.log('kipper');
			}
			
			div.append(circuitInp, circuitButt);
		}

		return {buildDisplay:buildDisplay}
	}
	
	var setup = function (div) {
        var model = Model();
        var view = View(div, model);

        view.buildDisplay();
    };
	
	
	return {setup:setup}
}()

$(document).ready(function () {
    $('.circuit').each(function () {
        circuit.setup($(this));
    });
});