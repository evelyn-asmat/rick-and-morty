const { User } = require("../DB_connection");

const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if (email && password){
            const user = await User.findOne({ where: { email: email } });
            if (user === null) {
                res.status(404).send("Usuario no encontrado");
            } else{
                if (user.password === password) {
                    res.json({access:true})
                } else {
                    res.status(403).send("Contraseña incorrecta");
                }
            }
        } else {
            res.status(400).send("Faltan datos");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = login;
