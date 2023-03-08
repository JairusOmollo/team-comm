const express = require('express');
const authRoutes = require('./routes/authRoutes');
const propRoutes = require('./routes/proposalRoutes')
const cookieParser = require('cookie-parser');
const cors = require('cors');


//Database
const db = require('./config/database');


//Test DB
db.authenticate()
.then(() => {console.log('db connected.....')})
.catch( err => console.log(err.message))

const app = express();

//middleware
app.use(cors({origin: true, withCredentials: true, credentials: true}))
app.use(cookieParser())
app.use(express.json())


//Auth routes
app.use(authRoutes)

//proposal routes
app.use(propRoutes)

app.listen(5000)




