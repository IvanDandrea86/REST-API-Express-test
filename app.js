
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';


const __dirname = path.resolve();
const app = express();
const port =5000;
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send("<h1>Get Recived</h1>")
})

app.get('/db',(req,res)=>{
    // res.send("<h1>Get Recived</h1>")
    res.sendFile(path.join(__dirname,'/public/data','db.json'))
})
app.get(`/db:id`,(req,res)=>{
    const {id}=req.params
    fetch(`http://localhost:5000/db`)
        .then(response => response.json())
        .then(data=> {
            var client=data.clients[id-1]
            res.send(client)
})
})
app.post('/create_user')

app.listen(process.env.PORT ||port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  