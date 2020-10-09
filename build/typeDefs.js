"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\ntype Query {\n  helloWorld: String\n  users: [User!]!\n}\n\ntype User {\n  id: ID!\n  name: String!\n}\n\ntype Mutation {\n  createUser(name: String!): User!\n}\n\n"], ["\n\ntype Query {\n  helloWorld: String\n  users: [User!]!\n}\n\ntype User {\n  id: ID!\n  name: String!\n}\n\ntype Mutation {\n  createUser(name: String!): User!\n}\n\n"])));
var templateObject_1;
