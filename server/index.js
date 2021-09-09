const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config({ path: '.env' });

/* EXPRESS */
const app = express();

/* BODY-PARSER */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* CORS*/
app.use(cors());

/* ROUTES */
const boilerRoutes = require('./routes/boiler');
const buildingRoutes = require('./routes/building');
const userRoutes = require('./routes/user');

app.use('/api/boiler', boilerRoutes());
app.use('/api/building', buildingRoutes());
app.use('/api/user', userRoutes());

app.listen(process.env.PORT || 3000, () => {
  console.log(`CaldAr ~ Online - Running on PORT: ${process.env.PORT || 3000}`);
});
