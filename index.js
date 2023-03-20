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
        const user = {
            name: 'testing test',
            email: 'testing@gmail.com'
        }
        const result = await userCollection.insertOne(user);
        console.log(result);
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