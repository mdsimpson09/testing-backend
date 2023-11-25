import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class PlayerApi {
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${PlayerApi.token}` };
    const params = (method === "get") ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Player-specific API routes

  /** Signup for the site. */
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    let token = res.token; 
    PlayerApi.token = token;
    return token;
  }

  /** Get token for login from username, password. */
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    let token = res.token;
    PlayerApi.token = token;
    return token;
  }

  /** Get the current player. */
  static async getCurrentPlayer(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /** Get list of players (users) */
  static async getPlayers() {
    let res = await this.request("api/players");
    return res.players;
  }

  /** Get player by ID */
  static async getPlayerById(playerId) {
    let res = await this.request(`api/players/${playerId}`);
    return res.player;
  }

  // Add other player-specific methods as needed
}

export default PlayerApi;