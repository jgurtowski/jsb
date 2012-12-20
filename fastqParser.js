
importPackage(java.io);

var jsb = (function(local_jsb){
	

	local_jsb.fastqParser = function(filename){
	    
	    var inStream = new BufferedReader(new FileReader(filename));
	    
	    var record = {
		name: null,
		sequence: null,
		description: null,
		quality: null
	    };

	    return{
		
		hasNext: function(){
		    record.name = inStream.readLine();
		    record.sequence = inStream.readLine();
		    record.description = inStream.readLine();
		    record.quality = inStream.readLine();
		    
		    if(!record.name.startsWith("@"))
			throw "Corrupted fastq, header should start with '@'";

		    if(!record.description.startsWith("+"))
			throw "Corrupted fastq, description should start with '+'";
		    if(!(record.sequence.length() == record.quality.length()))
			throw "Quality and sequence should be the same length";

		    record.name = record.name.substring(1,record.name.length());
		    record.description = record.description.substring(1,record.description.length());
		    return true;
		},

		next: function(){
		    return record;
		}
	    };
	};
	return local_jsb;

})(jsb || {});