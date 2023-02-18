const express = require('express');
require('dotenv').config();


class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.partials = require('hbs');

        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    };

    middlewares() {
        this.app.use(express.static('views'));
        this.app.set('view engine', 'hbs');

        this.partials.registerPartials('views/partials', function (err) {
            if (err) { console.log(err) };
        });
    };

    routes() {
        this.app.use('/', require('../routes/routes'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
    };
};


module.exports = Server;