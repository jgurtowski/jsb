
jsb.require("fastaParser.js");


var jsb = (function(myjsb){
    
    myjsb.main_func = function(args){
        if(args.length != 1){
            print("Usage: fastaToFastq file.fa");
            quit();
        }

        var parser = jsb.fastaParser(arguments[0]);

        var record = null;

        while(parser.hasNext()){
            record = parser.next();
            var quality = "";
            for(var i =0; i< record.sequence.length(); i++){
                quality += "I";
            }
            print("@"+record.name + "\n" + record.sequence +"\n+\n" + quality);
        }
    };

    return myjsb;
    
})(jsb || {});




