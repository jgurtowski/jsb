
importPackage(com.pacbio.hdf5.base);

var jsb = (function(myjsb){

	myjsb.main_func = function(args){

	    var baseReader =  new BaseReader("/seq/schatz/macrostromum/reads/pacbio/dec_2012/m121109_232021_42137_c100415372550000001523039301151390_s1_p0.bas.h5");

	    //	    for(var i=0;i<1000;i++){
	    //if(baseReader.getProductivity(i)){
	    //	    var bases = baseReader.getBase(i);
	    //	    var sbases = "";
	    //	    for(var j=0;j<bases.length;j++){
	    //		sbases += String.fromCharCode(bases[j]);
	    //	    }
	    //	    print(">"+i+"\n"+sbases);
	    //	}
	    //	}
	    
	    var zmw = 142;

	    var bases = baseReader.getBase(zmw);
	    var sbases = "";
	    for(var j=0;j<bases.length;j++){
		sbases += String.fromCharCode(bases[j]);
	    }
	    print(sbases);
	    
	    var qv = baseReader.getInsertionQV(zmw);
	    var qvs = "";
	    for(var i =0;i<qv.length;i++){
		qvs += " " + qv[i];
	    }
	    print(qvs);
	}

	return myjsb;
    })(jsb || {});







