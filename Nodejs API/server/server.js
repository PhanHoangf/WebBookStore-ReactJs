 const express = require('express');
const userRouter = require('./api/users/user.router');
const authorRouter = require('./api/author/author.router')
const bookRouter = require('./api/Book/book.router')
app = express();

app.use(express.json());


app.use('/api/users', userRouter);
app.use('/api/authors',authorRouter);
app.use('/api/allbook',bookRouter);

 app.listen(process.env.PORT || '5000', () => {
     console.log(`Server started on port: ${process.env.PORT || '5000'}`);
 });