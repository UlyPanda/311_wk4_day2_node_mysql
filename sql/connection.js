const mysql = require('mysql')

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: '104.155.148.83',
        user: 'root',
        password: '#1Pooplysses',
        database: 'admin',
        multipleStatements: true,
        debug: false
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;