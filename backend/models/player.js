// models/player.js

const db = require('../db');

class Player {

  static async getAll() {
    const result = await db.query(
      `SELECT id, first_name, last_name, email 
        FROM players`
    );  
    return result.rows;
  }

  static async getById(id) {
    const result = await db.query(
      `SELECT id, first_name, last_name, email 
        FROM players 
        WHERE id = $1`, [id]  
    );

    return result.rows[0]; 
  }

  static async create(data) {
    const result = await db.query(
      `INSERT INTO players (first_name, last_name, email)
        VALUES ($1, $2, $3)
        RETURNING id, first_name, last_name, email`,
      [data.first_name, data.last_name, data.email]
    );
    return result.rows[0];
  }

  // other CRUD methods
}

module.exports = { Player };