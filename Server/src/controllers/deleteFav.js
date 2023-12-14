const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
    try {
        const {id} = req.params;
        if (id){
            await Favorite.destroy({
                where: {
                    id: id
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

module.exports = deleteFav;