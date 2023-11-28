const http = require("http");
var fs   = require('fs');
const data = require('./utils/data.js');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")){
        const id = Number(req.url.split("/")[3]);
        const character = data.find(character => character.id === id);
        
        if (character) {
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(character));
        } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            return res.end("Character not found");
        }
	} else {
        res.writeHead(404);
        res.end();
    }
}).listen(3001, "localhost");