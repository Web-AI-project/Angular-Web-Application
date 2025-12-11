require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = process.env.API_PORT || 3000;

// Enable CORS
app.use(cors());
app.use(express.json());

// SQL Server configuration - Windows Authentication
// Connection string from C# format
const config = {
  server: 'DESKTOP-MR2VJ1G',
  database: 'TestStandDB',
  options: {
    encrypt: false,
    trustServerCertificate: false,
    enableArithAbort: true,
    trustedConnection: true
  },
  authentication: {
    type: 'default'
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

// API endpoint to get data
app.get('/api/data', async (req, res) => {
  try {
    // Connect to SQL Server
    await sql.connect(config);
    
    // Execute query - Update this query to match your table
    const result = await sql.query`SELECT TOP 100 * FROM Test_Station_1`;
    
    res.json(result.recordset);
  } catch (err) {
    console.error('SQL error:', err);
    res.status(500).json({ error: 'Database query failed', details: err.message });
  } finally {
    await sql.close();
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`API endpoint: http://localhost:${port}/api/data`);
});
