
jsb.require("fastqParser.js");


var jsb = (function(myjsb){
    
    myjsb.main_func = function(args){
        if(args.length != 1){
            print("Usage: fastqToFasta file.fq");
            quit();
        }

        var parser = jsb.fastqParser(arguments[0]);

        var record = null;

        while(parser.hasNext()){
            record = parser.next();
            print(">"+record.name + "\n" + record.sequence);
        }
    };

    return myjsb;
    
})(jsb || {});




