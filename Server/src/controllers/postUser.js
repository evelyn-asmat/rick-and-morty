const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const user = await User.findOrCreate({
                where: { email: email },
                defaults: {
                  password: password
                }
            });
            res.json(user);
        } else {
            res.status(400).send("Faltan datos");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = postUser