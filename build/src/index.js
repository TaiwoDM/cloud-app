"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const errorHandler_1 = require("./utils/errorHandler");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/users", auth_1.default);
app.use(errorHandler_1.errorHandler);
exports.default = app;
//# sourceMappingURL=index.js.map