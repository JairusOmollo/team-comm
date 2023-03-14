const express = require('express');
const authRoutes = require('./routes/authRoutes');
const propRoutes = require('./routes/proposalRoutes')
const profileRoutes = require('./routes/profileRoutes')
const bodyParser = require('body-parser')

const cors = require('cors');


//Database
const db = require('./config/database');
const cookieParser = require('cookie-parser');


//Test DB
db.authenticate()
.then(() => {console.log('db connected.....')})
.catch( err => console.log(err.message))

const app = express();

//middleware


app.use(cors({origin: true, withCredentials: true, credentials: true}));
app.use(express.json())


//routes to excute handler functions
app.use(authRoutes)
app.use(propRoutes)
app.use(profileRoutes)


app.listen(5000)




