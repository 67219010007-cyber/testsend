const express = require('express');
// use express attribute for app attribute
const app = express();
//  send parameter to port 3000
const PORT = 3000;
app.use(express.json());

 let data =  ['niggaboy'];

app.get('/',(req,res) => { 
    res.send("<input><h1>Welcome to SnackShop</h1></input>");
});


   app.get('/dashboard',(req,res) => { 
       res.send("dashboard page"); 
   });

app.get('/snacklists', (req, res)=>{
    res.send('lay,, candy, ice cream, chocolate')
});

 app.get('/api/data', (req, res)=>{
     console.log('this one is for data')
     res.send(data)
 });


app.post('/api/data', (req, res)=>{
    const newEntry  = req.body
    res.sendStatus(201)
    data.push(newEntry.name)
});



app.listen(PORT, () => {
    // output server running on port *???* which port u put in port attribute
    console.log(`Server is Running on port ${PORT}`);
});