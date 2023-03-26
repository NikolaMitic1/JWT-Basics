require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const mainRouter = require('./controllers/main');
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFoundmiddleware = require('./middleware/not-found');

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundmiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
    console.log(error);
    }
}

start()