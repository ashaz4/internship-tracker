const express = require('express');
const app = express();
const internshipRoutes = require('./routes/internships');
app.use(express.json());
app.use('/api/internships', internshipRoutes);
app.get('/', (req, res) => res.send('Internship Tracker API is running'));
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`✅ Server is running on http://localhost:${PORT}`));
}
module.exports = app;