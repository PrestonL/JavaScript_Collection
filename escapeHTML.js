/* escapeHTML() - Use this to Escape HTML
Usage:
var string = "<h2>Hello World</h2>";
string = string.escapeHTML();

https://github.com/PrestonL/JavaScript_Collection
Released to Public Domain via The Unlicense - Attribution Not Required
*/
String.prototype.escapeHTML = function() {
	string = this;
	string = string.replace(/&/g,"&amp;");
	string = string.replace(/</g,"&lt;");
	string = string.replace(/>/g,"&gt;");
	return string;
}
