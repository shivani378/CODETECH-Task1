
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static('public')); 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); 
});
app.listen(3000, () => {
    console.log(`Server is running on 3000`);
});
