
importPackage(java.io);


var jsb=(function(myjsb){

    var jsb_home = environment['jsb.home'];
    
    //bootstrap the import process
    myjsb.require = function(requirement){
	if(jsb_home == null)
            load(requirement);
        else{//our environment, import absolute path
            var req_file = new File(jsb_home,requirement);
            if(!req_file.exists()){
                throw "Cannot find required file: " + req_file;
            }
            load(req_file);
        }
    };

    //Auto import an application via its name
    myjsb.autoimport = function(name){
        var n = name+".js";
        myjsb.require(n);
    };


    myjsb.main = function(args){
        if(args.length < 1){
            print("Missing main function");
            quit();
        }
        
        myjsb.autoimport(args[0]);
        myjsb.main_func(args.slice(1,args.length));
    };

    return myjsb;

})(jsb || {});



jsb.main(arguments);
