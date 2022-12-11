const pool = require("../database/config");

class Comments {
    async get(req, res) {
        const data = await pool.query('select * from comments');
        res.json(data.rows);
    }
    async create(req, res) {
        const { name, star, text } = req.body;
        const data = await pool.query('insert into comments(name, star, text) values($1, $2, $3) returning *', [name, star, text]);
        res.json(data.rows[0]);
    }
}

module.exports = new Comments();