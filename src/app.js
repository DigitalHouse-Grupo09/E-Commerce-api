//
// dependencies
//
require('dotenv').config();

//
// imports
//
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const compression = require('compression');
const routes = require('./routes');
const app = express();

//
// constants
//
const port = process.env.PORT || 3000;

//
// middlewares
//
app.use(express.static('public'));
app.use(morgan('dev'));
app.enable('trust proxy');
app.disable('x-powered-by');
app.use(cors());
app.options('*', cors());
app.use(compression());

//
// routes
//
app.use('/api/users', routes.api.users);
app.use('/api/products', routes.api.products);
app.use('/api/categories', routes.api.categories);

//
// error pages
//
// 404
app.use((req, res, next) => res.status(404).send({

}));
// uncached errors
app.use((error, req, res, next) => res.status(500).render('500', { error }));

//
// listen application
//
app.listen(port, () => console.log(`Servidor iniciado - http://localhost:${port}`));
