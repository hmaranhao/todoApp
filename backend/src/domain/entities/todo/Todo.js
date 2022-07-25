"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Todo_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = exports.status = void 0;
const typeorm_1 = require("typeorm");
var status;
(function (status) {
    status[status["pending"] = 0] = "pending";
    status[status["inProgress"] = 1] = "inProgress";
    status[status["done"] = 2] = "done";
})(status = exports.status || (exports.status = {}));
let Todo = Todo_1 = class Todo {
    constructor(props) {
        Object.assign(this, props);
    }
    static create(props) {
        const _todo = new Todo_1({
            ...props,
            createdAt: new Date(),
        });
        return _todo;
    }
    static update(props) {
        const _todo = new Todo_1({
            ...props
        });
        return _todo;
    }
    static start(props) {
        const _todo = new Todo_1({
            ...props,
            startedAt: new Date(),
            status: status.inProgress
        });
        return _todo;
    }
    static finish(props) {
        const _todo = new Todo_1({
            ...props,
            finishedAt: new Date(),
            status: status.done
        });
        return _todo;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Todo.prototype, "_id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar'),
    __metadata("design:type", String)
], Todo.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', default: null }),
    __metadata("design:type", String)
], Todo.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Todo.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: new Date() }),
    __metadata("design:type", Date)
], Todo.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: null }),
    __metadata("design:type", Date)
], Todo.prototype, "startedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamptz', default: null }),
    __metadata("design:type", Date)
], Todo.prototype, "finishedAt", void 0);
Todo = Todo_1 = __decorate([
    (0, typeorm_1.Entity)("todos"),
    __metadata("design:paramtypes", [Todo])
], Todo);
exports.Todo = Todo;
