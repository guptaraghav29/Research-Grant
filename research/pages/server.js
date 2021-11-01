const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://rg:gup@questiondata.wbq3q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

app.listen(4000, function() {
    console.log("server is running on port 4000")
})

