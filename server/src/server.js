const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const morgan = require('morgan')

const port = process.env.PORT || 8001
const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json())
app.use(cors())


// Define a route
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

app.listen(port,()=>{
    console.log(`server is running on localhost:${port}`)
})