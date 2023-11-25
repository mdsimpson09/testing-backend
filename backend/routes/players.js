// backend/routes/players.js

const express = require('express');
const router = express.Router();
const Player = require("../models/Player");


// Get all players
router.get('/', async (req, res, next) => {
    try {
      const players = await Player.getAll(); 
      res.json({players});
    } catch (err) {
      next(err);
    }
  });

// Get player by ID
router.get('/:id', async (req, res, next) => {
  try {
    console.log('player_id:', req.params.id);
    const player = await player.get(req.params.id);
    return res.json({ player });
  } catch (err) {
    return next(err);
  }
});

// Create new player 
router.post('/', async (req, res, next) => {
  try {
    const player = await Player.create(req.body);
    return res.status(201).json({ player });
  } catch (err) {
    return next(err);
  }
});

// Update existing player
router.patch('/:id', async (req, res, next) => {
  try {
    const player = await Player.update(req.params.id, req.body);
    return res.json({ player }); 
  } catch (err) {
    return next(err);
  }
});

// Delete player
router.delete('/:id', async (req, res, next) => {
  try {
    await Player.remove(req.params.id);
    return res.json({ deleted: req.params.id });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;