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
var core_1 = require("@angular/core");
var UserComponent = (function () {
    function UserComponent() {
        this.name = "John Smiff";
        this.email = "johnsmiff@gmail.com";
        this.address = {
            street: '123 GFY Street',
            city: 'DFB',
            state: 'FL'
        };
        this.hobbies = ['Music', 'Design', 'Sports'];
        this.showHobbies = false;
    }
    UserComponent.prototype.toggleHobbies = function () {
        if (this.showHobbies == true) {
            this.showHobbies = false;
        }
        else {
            this.showHobbies = true;
        }
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'user',
        template: "\n    <h1>Hello, {{name}}</h1>\n    <h6>Please leave your information below and I'll be in contact with you as soon as I am able. :)</h6>\n    <p>{{name}}</p>\n    <p>{{email}}</p>\n    <p>{{address.street}}, {{address.city}}, {{address.state}}</p>\n    <button (click)=\"toggleHobbies()\" > {{showHobbies ? \"Hide Hobbies\" : \"Show Hobbies\"}} </button><br />\n    <div *ngIf=\"showHobbies\">\n    <h3>Hobbies</h3>\n    <ul>\n        <li *ngFor=\"let hobby of hobbies\">\n            {{hobby}}\n        </li>\n    </ul>\n    </div>\n    <hr />\n    <form>\n        <label>Name: </label> <br />\n        <input type=\"text\" name=\"name\" [(ngModel)] = \"name\" /> <br />\n        <label>Email: </label> <br />\n        <input type=\"text\" name=\"email\" [(ngModel)] = \"email\" /> <br />\n        <label>Street: </label> <br />\n        <input type=\"text\" name=\"address.street\" [(ngModel)] = \"address.street\" /> <br />\n        <label>State: </label> <br />\n        <input type=\"text\" name=\"address.city\" [(ngModel)] = \"address.city\" /> <br />\n        <label>State: </label> <br />\n        <input type=\"text\" name=\"address.state\" [(ngModel)] = \"address.state\" /> <br />\n    </form>\n  ",
    }),
    __metadata("design:paramtypes", [])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map