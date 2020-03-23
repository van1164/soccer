var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql');



var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
        if(queryData.id === 1){
            fs.readFile('app.txt',function(error, data){
                response.end('a');
                if(error){
                    console.log(error);

                }
                response.writeHead(200);
                response.end(data);
            });

          };
          response.writeHead(200);
          response.end('asdfasdfsdf');

        }; 




   
});


app.listen(3000);
