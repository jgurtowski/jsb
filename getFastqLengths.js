#!/usr/bin/env jsb

load("fastqParser.js");

if(arguments.length != 1){
	print("getFastqLengths.js file.fa");	
	quit();
}

var parser = jsb.fastqParser(arguments[0]);

var record = null;

while(parser.hasNext()){
    record = parser.next();
    print(record.name + "\t" + record.sequence.length());
}
