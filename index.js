const express = require( 'express');
const cors = require( 'cors' );
const app = express();
const port=process.env.PORT ||5000;

app.use(cors())
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('hello from my over own smarty smarty pant')
});

const users=[
    {id:'1',name:'John',email:'john@example.com',phone:'123'},
    {id:'2',name:'Lasam',email:'Mon@example.com',phone:'123456'},
    {id:'3',name:'Sabana',email:'Sabana@example.com',phone:'123456'},
    {id:'4',name:'labana',email:'Jamshed@example.com',phone:'123456'},
    {id:'5',name:'kopila',email:'Mon@example.com',phone:'123456'},
    {id:'6',name:'Mon',email:'Sakur@example.com',phone:'123456'},
    {id:'7',name:'Iqbal',email:'Iqbal@example.com',phone:'123456'}

]


app.get('/users', (req, res)=>{
    res.send(users)


})
app.post('/users', (req, res)=>{
    console.log('request',req.body)
    res.send("post method success")
})
app.get('/fruits', (req, res)=>{
    res.send(['apple','komola','jam']);
})
app.get('/fruits/mango/fazley',(req, res)=>{
    res.send('sour sour fazley flavour')
})
app.get('/users/:id', (req, res)=>{
    console.log(req.params)
    const id=(req.params.id);
    const user=users.find(u=>u.id===id);
    res.send(user)
})
app.listen(port,()=>{
    console.log('listening on port',port)
});