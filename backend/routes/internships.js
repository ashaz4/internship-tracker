const express = require('express');
const router = express.Router();
const pool = require('../config/db');
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM internships');
  res.json(result.rows);
});
router.post('/', async (req, res) => {
  const { company, role, status, applied_on } = req.body;
  const result = await pool.query(
    'INSERT INTO internships (company, role, status, applied_on) VALUES ($1, $2, $3, $4) RETURNING id',
    [company, role, status, applied_on]
  );
  res.json({ message: 'Internship added successfully', id: result.rows[0].id });
});
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  await pool.query(
    'UPDATE internships SET status = $1 WHERE id = $2',
    [status, id]
  );
  res.json({ message: 'Internship updated successfully' });
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM internships WHERE id = $1', [id]);
  res.json({ message: 'Internship deleted successfully' });
});
module.exports = router;