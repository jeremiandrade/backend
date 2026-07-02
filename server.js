const express = require('express');
const app = express();
const port = process.env.API_SERVER_PORT || 3000;



//START SERVER
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// FIRST ROUTE
app.get('/', (req, res) => {
    res.send('Hello World!');
});
