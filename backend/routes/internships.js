const express = require('express');
const router = express.Router();
const pool = require('../config/db');
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM internships ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.post('/', async (req, res) => {
  const { company, role, status, applied_on } = req.body;
  try {
    await pool.query(
      'INSERT INTO internships (company, role, status, applied_on) VALUES ($1, $2, $3, $4)',
      [company, role, status, applied_on]
    );
    res.status(201).send('Internship added');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { company, role, status, applied_on } = req.body;
  try {
    await pool.query(
      'UPDATE internships SET company=$1, role=$2, status=$3, applied_on=$4 WHERE id=$5',
      [company, role, status, applied_on, id]
    );
    res.send('Internship updated');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM internships WHERE id=$1', [id]);
    res.send('Internship deleted');
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
