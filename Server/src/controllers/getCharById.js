const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`);
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
        return character.id ? res.json(character) : res.status(404).send("Not found")
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = getCharById;