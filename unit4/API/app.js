const express = require('express');

const books = require('./books-data.json');

const app = express();

app.use(express.json());

app.get('/',(req, res) => {
    res.send({books});
})

app.post('/books',(req, res) => {
    const NewBooks = [...books,req.body];

    res.send(NewBooks);
})

app.patch('/books/:id',(req, res) => {
    const book = books.map((el)=>{
        if(el.id == req.params.id){
            if(req?.body?.author) el.author = req.body.author;
            if(req?.body?.published_year) el.published_year = req.body.published_year;
        }

        return el;
    })

    res.send(book);
})


app.get('/books/:id',(req, res) => {
    const book = books.filter((el)=>{
        if(el.id == req.params.id) return el;
    })

    res.send(book);
})


app.delete('/books/:id',(req,res)=>{
    const NewBooks = books.filter((el)=>{
        if(el.id != req.params.id) return el;
    })

    res.send(NewBooks);
})


app.listen(1234,()=>{
    console.log('Your Listening on port 1234')
})