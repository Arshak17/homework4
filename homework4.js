const triangleStars = function(h) {
	const f = function(starCount,spaceCount){
		const g = function(n, s) {
			if( n === 0 ) {
				return "";
                }
			if( n === 1) {
				return s;
                }
			return s + g(n-1,s);
		};

		if(starCount === 1) {
			return g(spaceCount, " ") + "*" +g(spaceCount, " ");
                }
		return g(spaceCount, " ") + g(starCount , "*") + g(spaceCount, " ") + "\n" + f(starCount-2,spaceCount+1);
	};
  if(h <= 0) {
	  return "";
}
  return f(2*h-1, 0);
};

triangleStars(5);

const pow = function(base, n) {
	if(n < 1 || base < 1) {
		return ;
        }
	if(n === 1) {
		return base;
        }
	return base * pow(base, n-1);	
};
pow(2,3);

const reverse = function(str) {
	const f = function(str, length) {
		if(length === 1 ) {
			return str[0];
                }
		return str[length-1] + f(str, length -1);
		
	};
	if(str === "") {
		return "";
                }
	if(str.length === 1) {
		return str;
                }
	return f(str, str.length); 
};
reverse("abcd");

g = function(size, mark){
	if(size === 0)
		return "";
	if(mark === 0)
		return " *" + g(size - 1, mark);	
	return "* " + g(size - 1, mark);	
};
f = function(size, line){	
	if(line > size )
		return "";
	console.log(g(size, line % 2) + "\n");
	console.log( line % 2 +  "\n" + line + size);
	return g(size, line % 2) + "\n" + f(size, line + 1);
};
checkerboard = function(size){
	debugger;
	if(size <= 0)
		return "size....";
	return f(size, 1);
};
checkerboard(5);
