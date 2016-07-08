this repo has tutorial based code 
#Running a node file
    "node file_name "
 
#there are 3-4 file which are imp in the long-run
    server.js , server_winston.js , server_log4js.js , check_tcp.py 

    python code listen whats written on the tcp port 

    server*.js uses winston or log4js logger to write to the port which is listened by the logstash listener 


    check the *.conf file 
    these file are config file for logstash the one which was used for server_winston.js is secnd_pipeline.conf 

#Runnig ELK
    #run elastic search
        /bin/elasticsearch

    #run kibana
        /bin/kibana

    #run logstash
        /bin/logstassh -e ' ' #config format
        or
        /bin/logstash -f filename.config


#Working of ELK

    elasticsearch is tied to kibana ,and logstash stacks all the incoming data in the elasticsearch after indexing it based on the filter section in the conf file which is passed in to the logstash .

    in the input section of the conf file , logstash listens to the port mentioned in it , after itt receives data, it just index the data and put the data what is mentionined in the output section

#Errors
     will get err :
     1.if you run kibana before running elastic search 
     2. run server without running logstash file since the nodejs file (       server_winston.js) uses transports.logstash logger to log the data to Logstash

#Misc
    any nodejs code is goin to run on the server

