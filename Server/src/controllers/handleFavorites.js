let myFavorites = [];

const postFav = (req, res) => {
    myFavorites.push(req.body);
    res.json(myFavorites);
}

const deleteFav = (req, res) => {
    const { id } = req.params;
    myFavorites = myFavorites.filter((c) => c.id !== Number(id));
    res.json(myFavorites);
}

module.exports = {postFav, deleteFav}