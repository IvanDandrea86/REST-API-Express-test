
import express from 'express';
import fetch from 'node-fetch';
import path from 'path';


const __dirname = path.resolve();
const app = express();
const port =5000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/','index.html'))
})

app.get('/db',(req,res)=>{
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

app.get(`/contact:id`,(req,res)=>{
    const {id}=req.params
    fetch(`http://localhost:5000/db`)
    .then(response => response.json())
    .then(data=> {
       var contact=data.clients
      const newcontact= contact.map(elem=>({ name: elem.name, phone:elem.phone, email:elem.email}))
        res.send(newcontact[id-1])
})
})

app.post('/create_user')

app.listen(process.env.PORT ||port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  