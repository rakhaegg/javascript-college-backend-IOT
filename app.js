const connectDB = require('./config/default')
const express = require('express');
var cors = require('cors');


const sensor = require('./routes/api/sensor')
const app = express();


connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use('/api/sensor', sensor)

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));