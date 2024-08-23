"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const users_1 = __importDefault(require("./routes/users"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
console.log(users_1.default);
app.use("/api", users_1.default);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server test");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
