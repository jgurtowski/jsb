
jsb.require("fastaParser.js");


var jsb = (function(myjsb){
    
    jsb.main_func = function(args){
        if(args.length != 1){
	    print("getFastaLengths file.fa");	
	    quit();
        }

        var parser = jsb.fastaParser(args[0]);
        
        var record = null;
    
        while(parser.hasNext()){
            record = parser.next();
            print(record.name + "\n" + record.sequence.length());
        }
    };
    
    return myjsb;

})(jsb || {});



