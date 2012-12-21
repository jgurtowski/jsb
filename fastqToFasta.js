#!/usr/bin/env jsb

load("fastqParser.js");

if(arguments.length != 1){
	print("fastqToFasta.js file.fq");	
	quit();
}

var parser = jsb.fastqParser(arguments[0]);

var record = null;

while(parser.hasNext()){
    record = parser.next();
    print(">"+record.name + "\n" + record.sequence);
}
