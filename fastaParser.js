
importPackage(java.io);

var jsb = (function(local_jsb){

    
    //Fasta Parser
    //  Create a new fastaParser:
    //     var parser = jsb.fastaParser(inputFile);
    // var record = null;
    // while(parser.hasNext()){
    //    record = parser.next();
    //    print(record.name + ":" + record.sequence);
    //}
    
    local_jsb.fastaParser = function(filename){
        
        var inStream = new BufferedReader(new FileReader(filename));

        var record = {
            name: null,
            sequence: null
        };
        
        var current_header = new java.lang.StringBuffer();
        var current_sequence = new java.lang.StringBuffer();
        var first = true;
        var line;
        
        return {
            hasNext: function(){
                line = inStream.readLine();
                if( line == null )
                    return false;

                if(first){
                    current_header.append( line.substring(1,line.length()) );
                    line = inStream.readLine();
                    first = false;
                }
                
                while(line != null){
                    if(line.startsWith(">")){
                        break;
                    }
                    current_sequence.append(line);
                    line = inStream.readLine();
                }
                
                record.name = current_header.toString();
                record.sequence = current_sequence.toString();
                current_header.setLength(0);
                current_sequence.setLength(0);
                if(line != null)
                    current_header.append(line.substring(1,line.length()));
                return true;
            },
            
            next: function(){
                return record;
            }
        };        
    };

    return local_jsb;

})(jsb || {});
