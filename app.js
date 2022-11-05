const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ejs = require('ejs');
app.set('view engine','ejs');

const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/blog_database',{useNewUrlParser: true});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));
const fileUpload = require('express-fileupload');
app.use(fileUpload());

const validateMiddleWare = require('./middleware/validationMiddleware');
app.use('/posts/store',validateMiddleWare)

const homeController = require('./controllers/home');
app.get('/',homeController);

const aboutController = require('./controllers/about');
app.get('/about',aboutController);

const contactController = require('./controllers/contact');
app.get('/contact',contactController);

const newestPostController = require('./controllers/newestPost');
app.get('/posts/newest',newestPostController);  

const newUserController = require('./controllers/newUser');
app.get('/auth/register',newUserController);

const storeUserController = require('./controllers/storeUser');
app.post('/users/register',storeUserController);

const getPostController = require('./controllers/getPost');
app.get('/post/:id',getPostController)

const newPostController = require('./controllers/newPost');
app.get('/posts/new',newPostController)

const storePostController = require('./controllers/storePost');
app.post('/posts/store',storePostController);



app.listen(port,()=>{
    console.log(`Listening on port ${3000}`)
})