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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Post_1 = require("./Post");
const Upvote_1 = require("./Upvote");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    type_graphql_1.Field(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.OneToMany(() => Post_1.Post, (post) => post.creator),
    type_graphql_1.Field(() => Post_1.Post),
    __metadata("design:type", Array)
], User.prototype, "posts", void 0);
__decorate([
    typeorm_1.OneToMany(() => Upvote_1.Upvote, (upvote) => upvote.user),
    __metadata("design:type", Array)
], User.prototype, "upvotes", void 0);
__decorate([
    typeorm_1.OneToMany(() => Upvote_1.Upvote, (upvote) => upvote.user),
    __metadata("design:type", Array)
], User.prototype, "comments", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    type_graphql_1.Field(() => String),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    type_graphql_1.Field(() => String),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
User = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map