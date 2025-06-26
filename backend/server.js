const express = require('express');
const cors = require('cors');
const app = express();
const internshipRoutes = require('./routes/internships');
app.use(cors());
app.use(express.json());
app.use('/api/internships', internshipRoutes);
app.listen(5000, () => {
  console.log('✅ Server is running on http://localhost:5000');
});