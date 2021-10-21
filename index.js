const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const users = [
    {id:0, name: "Md SHofiur",email:"shofiur1@gmail.com"},
    {id:1, name: "Md shafikur",email:"shofiu2r@gmail.com"},
    {id:2, name: "Md Shaut",email:"shofiur4@gmail.com"},
    {id:3, name: "Md ulfat",email:"shofiur3@gmail.com"},
    {id:4, name: "rajia",email:"shofiu4r@gmail.com"},
    {id:5, name: "sharmin",email:"shofiu5r@gmail.com"},
  ]
  

app.get('/users', (req,res) => {
     const search = req.query.search;
    if(search){
        const searchAll = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchAll);
    } else{
        res.send(users);
    }
})


app.get('/users/:id', (req,res) => {
         const id = req.params.id;
         const user = users[id]
         res.send(user)
})

///




app.post('/users',(req, res) => {
    const newUsers = req.body;
    newUsers.id = users.length;
    users.push(newUsers);

    console.log("Hiting Post",req.body);
    // res.send(JSON.stringify(newUsers));
    res.json(newUsers);
})





//////
app.get('/fruits/', (req,res) => {
    res.send(['mango','orange','apple']);
})


app.get('/fruits/mangoes/fazil', (req,res) => {
       res.send('tok marka fazil');
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




