
importPackage(java.io);

var jsb = (function(local_jsb){

    
    //Fasta Parser
    // Should be used as follows:
    //
    // var parser = jsb.fastaParser('infile');
    // var record = null;
    // while(parser.hasNext()){
    //    record = parser.next();
    //    print(record.name + ":" + record.sequence);
    //}
    
    local_jsb.fastaParser = function(filename){
        
        var inStream = new BufferedReader(new FileReader(filename));
        var current_header = null;
        var current_sequence = null;
        var next_header = null;
        var line = null;
        
        return {
            hasNext: function(){
                line = inStream.readLine();
                if( line == null )
                    return false;

                if(next_header == null){
                    current_header = line.substring(1,line.length());
                    line = inStream.readLine();
                }else{
                    current_header = next_header;
                }
                
                current_sequence = "";
                while(line != null){
                    if(line.startsWith(">")){
                        next_header = line.substring(1,line.length());
                        break;
                    }
                    current_sequence += line;
                    line = inStream.readLine();
                }
                return true;
            },
            
            next: function(){
                return {
                    name : current_header,
                    sequence: current_sequence
                };
            }
        };        
    };

    return local_jsb;

})(jsb || {});
