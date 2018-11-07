"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.elements = [];
    }
    push(el) {
        this.elements.push(el);
    }
    pop() {
        return this.elements.pop();
    }
    size() {
        return this.elements.length;
    }
}
exports.Stack = Stack;
