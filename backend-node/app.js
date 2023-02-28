const express = require('express');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const cors = require('cors');


//Database
const db = require('./config/database');


//Test DB
db.authenticate()
.then(() => {})
.catch( err => console.log('Error: ' +  err))

const app = express();

//middleware

app.use(cookieParser())
app.use(cors({ origin: true, credentials: true }))
app.use(express.json())


//Auth routes
app.use(authRoutes)

app.listen(5000)




