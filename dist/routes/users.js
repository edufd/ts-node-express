"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'world',
    insecureAuth: true
});
const router = (0, express_1.Router)();
router.get("/users", (req, res) => {
    //res.send("Express + TypeScript Server test");
    connection.connect();
    connection.query('SELECT * from country', (err, rows, fields) => {
        if (err)
            throw err;
        console.log('The list of countries is: ', rows);
        res.json({ user: "test", countries: rows });
    });
    connection.end();
});
exports.default = router;
