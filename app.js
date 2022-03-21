const express = require('express');
const app = express();
const path = require('path')
app.use(express.static('public'))
const port = 3032

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')));



app.listen(port,()=> console.log(`Server running in http://localhost:${port}`))