var circuit = function(){

    function EventHandler(){
        var handlers={};
        //map event string to list of callbacks
        function on(eventString, callback){
            var cblist=handlers[eventString]
            if(cblist===undefined){
                cblist=[]
                handlers[eventString]=cblist;
            }
            cblist.push(callback);
            
        }
        function trigger(eventString,data){
            var cblist=handlers[eventString];
            if(cblist!== undefined){
                for (var i=0;i<cblist.length;i+=1)
                {
                    cblist[i](data);
                }
            }
        }
            return{on:on, trigger: trigger}
        }

	var Model = function(Div){
	
		var eventHandler = EventHandler()
		
		
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
			var circuitButt = $('<button class = "circuitButt" onclick="test_fun()">Click!</button>');
			
			circuitButt.onclick=function(){
				console.log("kipper butt");
			}
		
			circuitButtFun(circuitButt)
			
			div.append(circuitInp, circuitButt);
		}
		
		//STILL HAVING PROBLEMS HERE
		var circuitButtFun =function(circuitButt){
			circuitButt.onclick=function(){
				console.log('kipper');
			}
		}

		return {buildDisplay:buildDisplay,
				on:eventHandler.on}
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