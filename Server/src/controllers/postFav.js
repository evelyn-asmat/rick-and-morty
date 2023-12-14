const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        const {id, name, origin, status, image, species, gender} = req.body;
        if (name && origin && status && image && species && gender){
            await Favorite.findOrCreate({
                where: {
                    id
                },
                defaults: {
                    name,
                    origin,
                    status,
                    image,
                    species,
                    gender
                }
            });
            const favs = await Favorite.findAll();
            res.json(favs);
        } else {
            res.status(401).send("Faltan datos");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = postFav;