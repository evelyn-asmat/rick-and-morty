const express = require("express");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const apiRouter = express.Router();

apiRouter.get("/character/:id", getCharById);
apiRouter.get("/login", login);
apiRouter.post("/login", postUser);
apiRouter.post("/fav", postFav);
apiRouter.delete("/fav/:id", deleteFav);

module.exports = apiRouter;