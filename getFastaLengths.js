

load("fastaParser.js");

if(arguments.length != 1){
	print("getfastaLengths.js file.fa");	
	quit();
}

var parser = jsb.fastaParser(arguments[0]);

var record = null;

var f = 0;
while(parser.hasNext()){
    record = parser.next();
    print(record.name + ":" + record.sequence.length);
}
