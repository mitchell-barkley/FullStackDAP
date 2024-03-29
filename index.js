const express = require('express');
const app = express();
const PORT = 7000;

global.DEBUG = false;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true, })); // This is important!
// app.use(methodOverride('_method')); // So is this!

app.get('/', (req, res) => {
    res.render('index.ejs', { name: 'Mitchell'});
});
app.get('/about', (request, response) => {
    response.render('about.ejs');
});

const tasksRouter = require('./routes/tasks')
app.use('/tasks', tasksRouter);

const actorsRouter = require('./routes/actors')
app.use('/actors', actorsRouter);

const staffRouter = require('./routes/staff')
app.use('/staff', staffRouter);

const customersRouter = require('./routes/customers')
app.use('/cust', customersRouter);

app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`Simple app running on port ${PORT}.`)
});