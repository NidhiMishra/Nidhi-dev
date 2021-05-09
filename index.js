const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

//Initialize
require('./init');

//Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

/*********************************************************/
//Routes
app.use('/api', require('./api'));
/*********************************************************/

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
