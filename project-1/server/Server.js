const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT||3003;

// global middle ware

app.use(cors());

app.get("/",(req,res)=>{
    res.json(["token1","token2","token3"])
})

app.listen(port);