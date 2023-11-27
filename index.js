const express = require('express');
const dayjs = require('dayjs');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const currentTime = dayjs().format('YYYY-MM-DD HH:mm:ss');
    res.send(`Current Time: ${currentTime}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
