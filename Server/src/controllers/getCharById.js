const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = (req, res) => {
    const { id } = req.params;
    axios(`${URL}/${id}`)
        .then((response) => {
            const { data } = response;
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
                location: data.location
            }
            res.json(character);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data.error);
        });
}

module.exports = getCharById;