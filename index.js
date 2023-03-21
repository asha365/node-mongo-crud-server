const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

//middlewire
app.use(cors())
app.use(express.json())

// user:dbUser2
// password: nVjdXJyyiLQpGEBx

const uri = "mongodb+srv://dbUser2:nVjdXJyyiLQpGEBx@cluster0.njs77my.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try{
        const userCollection = client.db('nodeMongoCrud').collection('users');

        app.get('/users', async (req, res) =>{
            const query = {};
            const cursor = userCollection.find(query);
            const users = await cursor.toArray();
            res.send(users);
        });

        app.post('/users', async (req, res) =>{
            const user = req.body;
            console.log(user);
            const result = await userCollection.insertOne(user); 
            res.send(result);
        });
    }
    finally{

    }
}
run().catch(err => console.log(err));

app.get('/', (req, res) =>{
    res.send('Hello from node mongo crud server');
})

app.listen(port, () =>{
    console.log(`Listening to port ${port}`);
})