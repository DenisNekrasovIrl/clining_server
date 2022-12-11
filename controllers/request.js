const pool = require("../database/config");

class Request {
    async create(req, res) {
        const { name, email, phone } = req.body;
        const data = await pool.query('insert into req(name, email, phone, checked) values($1, $2, $3, $4) returning *', [name, email, phone, false]);
        res.json(data.rows[0]);
    }
    async get(req, res) {
        const data = await pool.query('select * from req');
        res.json(data.rows);
    }
    async update(req, res) {
        const { id } = req.body;
        const data = await pool.query('update req set checked = $1 where id = $2 returning *', [true, id]);
        res.json(data.rows[0]);
    }
    async delete(req, res) {
        const data = pool.query('delete from req where checked = true returning *');
        res.json(data.rows);
    }
}

module.exports = new Request();