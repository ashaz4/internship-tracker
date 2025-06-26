# Internship Tracker API

This is a backend server built to manage internship applications. It provides a set of RESTful API endpoints for performing CRUD operations on internship data stored in a PostgreSQL database.

---

## Overview

The project demonstrates:

- API development using Node.js and Express
- PostgreSQL database integration
- RESTful CRUD operations
- Testing via an HTML interface

---

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- HTML (for frontend testing)
- JavaScript (Fetch API)

---

## Project Structure

```
internship-tracker/
├── backend/
│   ├── routes/
│   │   └── internships.js
│   ├── db.js
│   └── server.js
├── test.html
└── README.md
```

---

## API Endpoints

| Method | Endpoint                   | Description              |
|--------|----------------------------|--------------------------|
| GET    | /api/internships           | Get all internships      |
| POST   | /api/internships           | Add a new internship     |
| PUT    | /api/internships/:id       | Update internship by ID  |
| DELETE | /api/internships/:id       | Delete internship by ID  |

### POST Request Body

```json
{
  "company": "Google",
  "role": "Backend Intern",
  "status": "Applied",
  "applied_on": "2025-06-18"
}
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/ashaz4/internship-tracker.git
cd internship-tracker/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the PostgreSQL database

- Create a database named `internships`
- Run the following SQL to create the internships table:

```sql
CREATE TABLE internships (
  id SERIAL PRIMARY KEY,
  company TEXT NOT NULL,
  role TEXT NOT NULL,
  status TEXT NOT NULL,
  applied_on DATE NOT NULL
);
```

- Update your PostgreSQL credentials in `db.js`:

```js
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'internships',
  password: 'your_password',
  port: 5432,
});
```

### 4. Start the server

```bash
node server.js
```

Server will be running at:  
`http://localhost:5000`

---

## API Testing

### Option 1: Browser-Based Testing

Open `test.html` in your browser. You can:
- Add a new internship
- Update or delete by ID
- View success messages live

### Option 2: Direct URL Testing

View all internships directly:  
`http://localhost:5000/api/internships`

---

## Author

**Ashaz Akram**  
GitHub: [ashaz4](https://github.com/ashaz4)

---

## License

This project is licensed under the MIT License.
