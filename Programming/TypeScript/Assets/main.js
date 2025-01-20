var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name) {
        this.name = name;
    }
    Student.prototype.getStudent = function () {
        return {
            name: this.name
        };
    };
    Student.prototype.updateStudent = function (name) {
        this.name = name;
    };
    return Student;
}());
var Boy = /** @class */ (function (_super) {
    __extends(Boy, _super);
    function Boy(name, rollNo) {
        var _this = _super.call(this, name) || this;
        _this.rollNumber = rollNo;
        return _this;
    }
    Boy.prototype.getStudent = function () {
        return {
            name: this.name,
            rollNumber: this.rollNumber
        };
    };
    Boy.prototype.updateStudent = function (name, rollNo) {
        this.name = name;
        this.rollNumber = rollNo;
    };
    return Boy;
}(Student));
var Amit = new Boy('Amit', 1);
Amit.updateStudent("");
console.log(Amit.getStudent()); // {name : "Amit Das", rollNumber : undefined}
