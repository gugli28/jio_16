
`This repo has many tutorial based code and the a smaller version of working of Logstash, Elasticsearch and Kibana using a basic server built in nodejs. This code was merged with the main backend code of Jio Money Trasit App.`

#Task1
Given a set of cities list from two Operator, Merge the cities with same name. 
##Challenge 
(i)  the old names and new names
(ii) wrong spellings

Used Google map and bing Map API to query the places. These API gave the correct output for around 60% of the data.
for eg: Querying Bangalore and Bengaluru gave the same result:

`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=Bangalore+India&key= YOUR API KEY
https://maps.googleapis.com/maps/api/place/textsearch/xml?query=Bengalor+India&key = YOUR API KEY
https://maps.googleapis.com/maps/api/place/textsearch/xml?query=Bengluru+India&key = YOUR API KEY `
```  
<?xml version="1.0" encoding="UTF-8"?>
<PlaceSearchResponse>
    <status>OK</status>
    <result>
        <name>Bengaluru</name>
        <type>locality</type>
        <type>political</type>
        <formatted_address>Bengaluru, Karnataka, India</formatted_address>
        <geometry>
            <location>
                <lat>12.9715987</lat>
                <lng>77.5945627</lng>
            </location>
            <viewport>
                <southwest>
                    <lat>12.7342888</lat>
                    <lng>77.3791981</lng>
                </southwest>
                <northeast>
                    <lat>13.1737060</lat>
                    <lng>77.8826809</lng>
                </northeast>
            </viewport>
        </geometry>
        <icon>https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png</icon>
        <reference>CmRbAAAAQ8YMIERaJJ3Uz34MnxrNzTbZoGgx6CJYEKsea9gkWIGdiQ5jqj4tjkINJHenjnJ_OZOcg-wgiMBEUC4FEt9YuoqcgGKKZ5zmDgi6cjXNp4TgHMTVOEB2Rl2tEAQwgMLgEhDIml4m8O9g2OEqky9UvFHDGhSbfOrDqZERFV0DkCymgyWDhjkhfw</reference>
        <id>0862832923832bfb1e46cbe843cdaa03a9ee8aa1</id>
        <photo>
            <photo_reference>CoQBdwAAAN7wLE8NG9FGV9cpUnI-1H_0PkbS1z0yiv4AuyykLs1SSbxc6wzWELJOBZ-Wk0-xGaLmvRevHxbKM-5YhZeEXUdnzMybzsPvJmPIZSe-kgoEjxpYGLIZlSzA4Kyx_WGuh44kVJANikUwMqTau2-lUWaxhitNdmaqfaRzEyYK7itvEhDeT7Fl3JT0mQZWy2cnbv-EGhR04eunDoT-aRQIMJzuphyDTX0lAw</photo_reference>
            <width>2592</width>
            <height>1944</height>
            <html_attribution>&lt;a href=&quot;https://maps.google.com/maps/contrib/116655225648475640231/photos&quot;&gt;harsha vardhan reddy&lt;/a&gt;</html_attribution>
        </photo>
        <place_id>ChIJbU60yXAWrjsR4E9-UejD3_g</place_id>
    </result>
</PlaceSearchResponse>
```
YOUR API KEY --- `https://developers.google.com/places/web-service/get-api-key`

Old and new names challenge was resolved by usng API by 100%. And the spelling error of the 60 % of the data was resolved.

 
#Task2
The task was to get the log data of the users on a server and use `Logstash` to index data that could be used by `Elasticsearch` to filter out necessary component to analyse data. This filtered data was then analysed using `Kibana` to get the bigger picture.

#Working of ELK

Elasticsearch is tied to kibana ,and logstash stacks all the incoming data in the elasticsearch after indexing it based on the filter section in the conf file which is passed in to the logstash.

In the input section of the conf file, logstash listens to the port mentioned in it, after it receives data, it just index the data and put the data what is mentionined in the output section

#Running a node file
`$node file\_name`
 
#Files for ELK demo
server.js , server\_winston.js , server\_log4js.js , check\_tcp.py 

python code listen whats written on the tcp port.
server*.js uses winston or log4js logger to write to the port which is listened by the logstash listener.
check the `*.conf` file 
these files are config file for logstash, the one which was used for server\_winston.js is secnd_pipeline.conf 

#Runnig ELK

###run elastic search
`$/bin/elasticsearch`

###run kibana
`$/bin/kibana`

###run logstash
`$/bin/logstassh -e ' ' #config format`
or
`$/bin/logstash -f filename.config`


#Errors
**Will get err:**
1.If you run kibana before running elastic search 
2.Run server without running logstash file since the nodejs file (server_winston.js) uses transports.logstash logger to log the data to Logstash

#Misc
any nodejs code is going to run on the server

#Report
`Intern_report.pdf` consist a detailed info of what else I did and what Tools I used to accomplish the task.

