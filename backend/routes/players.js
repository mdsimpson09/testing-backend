// backend/routes/players.js
const jsonschema = require("jsonschema");
// onst { ensureCorrectUserOrAdmin, ensureAdmin } = require("../middleware/auth");
const express = require('express');
const Player = require("../models/player");
const playerUpdateSchema = require("../schemas/playerUpdate.json");

const router = express.Router();

// Get all players
router.get('/', async (req, res, next) => {
    try {
      const players = await Player.findAll(); 
      return res.json({ players });
    } catch (err) {
      return next(err);
    }
  });

// Get player by ID
router.get('/:username', async (req, res, next) => {
  try {
    const player = await Player.get({ where: { username: req.params.username } });
    // const player = await player.get(req.params.id);
    return res.json({ player });
  } catch (err) {
    return next(err);
  }
});

// Create new player 
router.post('/', async (req, res, next) => {
  try {
    const player = await Player.register(req.body);
    return res.status(201).json({ player });
  } catch (err) {
    return next(err);
  }
});

// Update existing player
router.patch('/:username', async (req, res, next) => {
  try {
    const player = await Player.update(req.params.username, req.body);
    return res.json({ player }); 
  } catch (err) {
    return next(err);
  }
});

// Delete player
router.delete('/:username', async (req, res, next) => {
  try {
    await Player.remove(req.params.username);
    return res.json({ deleted: req.params.username });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;