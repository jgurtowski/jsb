

load("fastaParser.js");


var parser = jsb.fastaParser("test.fa");

var record = null;

var f = 0;
while(parser.hasNext()){
    record = parser.next();
    print(record.name + ":" + record.sequence.length);
}
