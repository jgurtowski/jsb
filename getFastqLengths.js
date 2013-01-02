
jsb.require("fastqParser.js");


var jsb = (function(myjsb){

    jsb.main_func = function(args){
        if(args.length != 1){
	    print("getFastqLengths file.fa");	
	    quit();
        }

        var parser = jsb.fastqParser(args[0]);

        var record = null;

        while(parser.hasNext()){
            record = parser.next();
            print(record.name + "\t" + record.sequence.length());
        }
    };

    return myjsb;
})(jsb || {});


