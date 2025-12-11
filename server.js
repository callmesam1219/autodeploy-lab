const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>CRM Lab - Auto Deployed! Test -1</h1>
    <p>Last deployed: ${new Date().toISOString()}</p>
    <p>Server: Ubuntu On-Prem via GitHub Actions</p>
  `);
});

app.listen(port, () => {
  console.log(`CRM app running on port ${port}`);
});
