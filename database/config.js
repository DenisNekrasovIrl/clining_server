const Pool = require('pg').Pool;
const pool = new Pool({
    connectionString: 'postgres://database_cleaning_user:CrKef1SSoP2G5ktSHX9Ea1o7WDYopXQc@dpg-ce69hhda4991ueul2gjg-a.frankfurt-postgres.render.com/database_cleaning_namedata_qcuc',
    ssl: {
        rejectUnauthorized: false
    }
})
module.exports = pool;