
jsb.require("fastqParser.js");


var jsb = (function(myjsb){
    
    myjsb.main_func = function(args){
        if(args.length != 1){
	    print("fastaToLine file.fq");	
	    quit();
        }

        var parser = jsb.fastqParser(args[0]);
        
        var record = null;
    
        while(parser.hasNext()){
            record = parser.next();
            print(record.name + "\t" + record.sequence + "\t" + record.description + "\t" + record.quality);
        }
    };
    
    return myjsb;

})(jsb || {});



