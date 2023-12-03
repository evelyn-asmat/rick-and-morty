const users = require("../utils/users");

const login = (req, res) => {
    const { email, password } = req.query;
    const exists = users.some((e) => e.email === email && e.password === password)
    res.status(200).json({access: exists});
}

module.exports = login;