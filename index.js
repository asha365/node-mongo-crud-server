const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('node server is running');
})

app.listen(port, () =>{
    console.log(`simple node server running in port ${port}`);
})