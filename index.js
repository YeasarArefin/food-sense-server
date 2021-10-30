const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server Running");
});

const uri = "mongodb+srv://myuserdb:jMu1AWcsqfE3zXDJ@cluster0.3xxnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

    try {

        await client.connect();
        const database = client.db("foodSense");
        const mealsCollection = database.collection("meals");
        const orderCollection = database.collection("orders");

        // post api (post single meal)
        app.post('/meals', async (req, res) => {

            const data = req.body;
            const result = await mealsCollection.insertOne(data);
            res.json(result);

        });

        // get api (get all meals)
        app.get('/meals', async (req, res) => {

            const data = await mealsCollection.find({}).toArray();
            res.send(data);

        });

        // get api (get single data)
        app.get('/meals/:_id', async (req, res) => {

            const id = req.params._id;
            const query = { _id: ObjectId(id) };
            const data = await mealsCollection.findOne(query);
            res.send(data);

        });

        app.post('/orders', async (req, res) => {

            const data = req.body;
            const result = await orderCollection.insertOne(data);
            res.json(result);

        });

        app.get('/orders', async (req, res) => {

            const result = await orderCollection.find({}).toArray();
            res.json(result);

        });

    } finally {
        // await client.close();
    }

} run().catch(console.dir);

app.listen(port, () => console.log("response from port", port));