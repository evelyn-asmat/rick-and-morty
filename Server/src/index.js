const http = require("http");
const getCharById = require("./controllers/getCharById");

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")){
        const id = Number(req.url.split("/")[3]);
        getCharById(res, id);
	} else {
        res.writeHead(404);
        res.end();
    }       
}).listen(3001, "localhost");