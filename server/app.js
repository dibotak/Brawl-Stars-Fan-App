require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const router = require('./routes');

app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
