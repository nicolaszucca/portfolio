const express = require('express');
require('dotenv').config();


class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express();

        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    };

    middlewares() {
        this.app.use(express.static('views'));
        this.app.set('view engine', 'hbs');
    };

    routes() {
        this.app.get('/', require('../routes/routes'));
        this.app.get('/login', require('../routes/routes'));
        this.app.get('/crud', require('../routes/routes'));
        this.app.get('/about', require('../routes/routes'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
    };
};


module.exports = Server;