const express = require('express');
require('dotenv').config();


class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = express();
        this.path = '';

        //Middlewares
        this.middlewares();
        //Routes
        this.routes();
    };

    middlewares() {
        this.app.set('view engine', 'html');
        this.app.engine('html', require('hbs').__express);
    };

    routes() {
        this.app.get(this.path, (req, res) => {
            res.send("test 1");
        });
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port: ${this.port}`);
        });
    };
};


module.exports = Server;