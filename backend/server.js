const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const cors = require('cors');

app.use(express.json())
const dbConnection = require('./db')


app.use('/api/cars/' , require('./routes/carsRoute'))

app.use('/api/bookings/' , require('./routes/bookingsRoute'))

app.use('/api/users/' , require('./routes/usersRoute'))




const path = require('path')

app.use(cors({ origin: true }));

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))