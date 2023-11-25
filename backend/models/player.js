const db = require('../db');

class Player {
  static async getAll() {
    try {
      const result = await db.query(
        `SELECT player_id, first_name, last_name, username, email, photo 
          FROM players`
      );
      return result.rows;
    } catch (error) {
      // Handle the error, log it, and potentially throw a custom error
      console.error('Error in Player.getAll:', error.message);
      throw new Error('Error fetching player data');
    }
  }

  static async get(id) {
    try {
      const result = await db.query(
        `SELECT player_id, first_name, last_name, username, email, photo 
          FROM players 
          WHERE player_id = $1`,
        [id]
      );

      return result.rows[0];
    } catch (error) {
      console.error('Error in Player.get:', error.message);
      throw new Error('Error fetching player by ID');
    }
  }

  static async create(data) {
    try {
      const result = await db.query(
        `INSERT INTO players (first_name, last_name, username, email, photo)
          VALUES ($1, $2, $3, $4, $5)
          RETURNING player_id, first_name, last_name, username, email, photo`,
        [data.first_name, data.last_name, data.email, data.username, data.photo]
      );

      return result.rows[0];
    } catch (error) {
      console.error('Error in Player.create:', error.message);
      throw new Error('Error creating player');
    }
  }
}

module.exports = Player;