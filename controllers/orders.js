const pool = require("../database/config");

class Orders {
    async get(req, res) {
        const data = await pool.query('select * from orders');
        res.json(data.rows);
    }
    async create(req, res) {
        const data = req.body;
        let databaseItem;

        if (data.calculator) {
            databaseItem = await pool.query(`insert into orders(name, email, phone, checked, area, typeRoom, typeClean, options, sale, comment) 
            values($1, $2, $3, $4, $5,$6, $7, $8, $9, $10) returning *`,
                [data.name, data.email, data.phone, false, data.area, data.typeRoom, data.typeClean, data.options, data.sale, data.comment]);
        }
        if (!data.calculator) {
            databaseItem = await pool.query(`insert into orders(name, email, phone, checked, area, typeRoom, typeClean, options, sale, valueRoom, comment) 
            values($1, $2, $3, $4, $5,$6, $7, $8, $9, $10, $11) returning *`,
                [data.name, '', data.phone, false, data.area, '', '', '', 0, data.valueRoom, '']);
        }
        res.json(databaseItem.rows[0]);
    }
    async update(req, res) {
        const { id } = req.body;
        const data = await pool.query('update orders set checked = $1 where id = $2 returning *', [true, id]);
        res.json(data.rows[0]);
    }
    async delete(req, res) {
        const data = await pool.query('delete from orders where checked = true returning *');
        res.json(data.rows);
    }
}

module.exports = new Orders();