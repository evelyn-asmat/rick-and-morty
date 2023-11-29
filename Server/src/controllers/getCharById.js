const axios = require("axios");
const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";

const getCharById = (res, id) => {
    axios(`${URL}/${id}?key=${API_KEY}`)
        .then((response) => {
            const {name, gender, species, origin, image, status} = response.data;
            const character = {
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(character));
        })
        .catch((error) => {
            res.writeHead(500, { "Content-Type": "text/plain" });
	        return res.end(error.message);
        });
}

module.exports = getCharById;