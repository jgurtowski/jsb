
jsb.require("fastaParser.js");


var jsb = (function(myjsb){
    
    jsb.main_func = function(args){
        if(args.length != 1){
	    print("fastaToLine file.fa");	
	    quit();
        }

        var parser = jsb.fastaParser(args[0]);
        
        var record = null;
    
        while(parser.hasNext()){
            record = parser.next();
            print(record.name + "\t" + record.sequence);
        }
    };
    
    return myjsb;

})(jsb || {});



