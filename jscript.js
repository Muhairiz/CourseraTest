var message = "in global.";
console.log("Global: message= "+message);

var a = function (){
	var message = "inside a";
	console.log("message a: " +message);

	function b(){
		console.log("b: message = "+message);
	}
	
	b();
}
a();
