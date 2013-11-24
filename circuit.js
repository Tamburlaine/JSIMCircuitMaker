var circuit = function(){
	console.log("circuit is working!")
	//counts the number of elements in the circuit from the parsed text
	var elCounter = function(text){
		//should parse the text into nice little tokens for us
		parsed = parser.decomment(parser.line_extend(parser.split(text)))
		console.log(parsed)
		
		return {parsed:parsed}
	}
	
	elCounter("kipper")
	
	
	return {elCounter:elCounter}
}()