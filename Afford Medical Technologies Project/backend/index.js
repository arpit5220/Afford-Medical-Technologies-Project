const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
app.use(express.json());
const cors = require('cors');
app.use(cors({
    origin: '*'
}))
const allTrainsroute = require("./routes/trainsAll");
const singleroute = require("./routes/TrainId");

app.use('/api',allTrainsroute)
app.use('/api/singleTrain',singleroute)

app.listen(port, () => console.log(`Node server listening on port ${port}!`));