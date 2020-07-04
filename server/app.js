const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const router = require('./routes');

app.use(router);

app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
