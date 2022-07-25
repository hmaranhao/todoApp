"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./cross-cutting");
const data_source_1 = require("./data-source");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(async () => {
    console.log("Here you can setup and run express / fastify / any other framework.");
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(routes_1.routes);
    app.listen(process.env.PORT || 5000, () => {
        console.log('Server is running on port', 5000);
    });
}).catch(error => console.log(error));
