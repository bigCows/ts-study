"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var cc = '123';
// let nums = '123' 
// console.log(nums);
var strs;
// strs = 123
// nums.set()
var nums;
nums = 123;
nums = '123';
var numss = 12;
numss = '123';
numss = true;
numss = undefined;
numss = null;
numss = function () { };
var hh;
hh = '123';
hh = 123;
hh = undefined;
console.log(typeof (hh));
// interface Type {
//     name: string,
//     readonly id: number,
//     age12?: number,
//     [propName: string]: string | number
// }
// //  tom的类型是Type，所以tom的属性必须和Type相同，不能多不能少，
// let tom: Type = {
//     name: 'cat',
//     id: 12,
//     age12: 19,
//     sex: 'boy',
//     abc:'123'
// }
// 定义数组
// 类型+ []
var array = [1, 2, 3];
// 泛型定义
var Arr = [];
var resArr = [1, 2, 3];
// 类数组-- 不能用普通数组形式来表现，应该使用接口形式
function fn() {
    var args = arguments;
}
Arr.push('123');
//  函数
//  函数声明
function fn1(x, y) {
    return x + y;
}
console.log(fn1(1, '2')); // '12'
// 此处第一个=>不是箭头函数，左边为输入类型，右边为输出类型，第二个=>表示为箭头函数
var fn2 = function (x, y) {
    return x + y;
};
console.log(fn2(5, 9));
var fn3 = function (x, y) {
    return x + y;
};
console.log(fn3(1, 2));
// 可选参数 必须写在必须参数后
var fn4 = function (x, y, z) {
    return x + y;
};
console.log(fn4(1, 2));
// 参数默认值
// TS会将添加默认值的形参转化为可选参数，此时可以写在必传参数前面
var fn5 = function (x, y) {
    if (x === void 0) { x = 2; }
    return x + y;
};
console.log(fn5(undefined, 2)); // 4
// 剩余参数
var fn6 = function (x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log.apply(console, rest);
};
console.log(1, 2, 3, 4);
function fun(x) {
    if (typeof (x) === 'number') {
        return x.toString().trim().split('').reverse().join('');
    }
    return x.trim().split('').reverse().join('');
}
// console.log(fun(123));
console.log(fun('143'));
var aaa = [1, 2, '3'];
var bbb = [1, '2', true];
var p = {
    x: 1,
    y: '2',
    z: 3
};
console.log(p);
var cat = {
    name: '猫',
    run: function () {
        console.log('run');
    }
};
var fishs = {
    name: '鱼',
    id: 1,
    swim: function () {
        console.log('fish');
    }
};
function getName(animal) {
    // return animal.name 可访问到共有属性name
    return animal.id;
}
console.log(getName(cat));
function getX(x) {
    return x;
}
console.log(getX(1));
var str = '123'; // 宽泛类型
var str1 = '555'; // 值类型
var str2 = '3443'; // 值类型
var str3 = '123'; // 将宽泛类型转为值类型
var arr4 = [1, 2, str, str1]; // 1,2,string,555
// 元组对于类型的数量和顺序都有限制
var ar1;
ar1 = ['qwe', 213];
// ar1 = [123,'q3we']
ar1[0] = '23';
// ar1[0] = 123
// 常规定义数组联合类型 顺序和数量没有限制
var ar2;
ar2 = [123, 123, '123', 123];
// 泛型定义联合类型 顺序数量没有限制，元组有限制
var ar4 = [];
ar4 = ['123', 123, 123, '123'];
var obj3 = {
    name: 'zs'
};
var str4 = '123';
var ar5;
(function (ar5) {
    ar5[ar5["a"] = 1.5] = "a";
    ar5[ar5["b"] = -3] = "b";
    ar5[ar5["c"] = -2] = "c";
    ar5[ar5["d"] = str4.length] = "d";
})(ar5 || (ar5 = {}));
console.log(ar5.a);
console.log(ar5.b);
console.log(ar5.c);
console.log(ar5.d);
var enums;
(function (enums) {
    enums[enums["first"] = 0] = "first";
    enums[enums["second"] = 1] = "second";
    enums[enums["third"] = 2] = "third";
})(enums || (enums = {}));
// let arc = [enums.first,enums.second,enums.third]
var arv = [enums.first, enums.second];
// console.log(arc);
console.log(arv);
var M = /** @class */ (function () {
    function M(na) {
        this.name = na;
    }
    M.prototype.sayHi = function () {
        return "".concat(this.name);
    };
    return M;
}());
var xiaoMing = new M('小明');
console.log(xiaoMing.sayHi());
console.log(xiaoMing);
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Son.prototype.sayHi = function () {
        return "son\u8C03\u7528M ".concat(_super.prototype.sayHi.call(this));
    };
    return Son;
}(M));
var son1 = new Son('儿子');
console.log(son1.sayHi());
// // 定义公共的属性和方法
// class zoo {
//     public tiger;
//     public  constructor (name:string) {
//         this.tiger = name
//     }
// }
// let myTiger = new zoo('老虎')
// console.log(myTiger.tiger);
var zoo = /** @class */ (function () {
    function zoo(name) {
        this.tiger = '213';
        this.tiger = name;
    }
    return zoo;
}());
var myZoo = /** @class */ (function (_super) {
    __extends(myZoo, _super);
    function myZoo(tiger) {
        var _this = _super.call(this, tiger) || this;
        console.log(_this.tiger);
        return _this;
    }
    return myZoo;
}(zoo));
var myTiger = new zoo('老虎');
console.log(myTiger.tiger);
var myTigers = new myZoo('小老虎');
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.myDog = '二哈';
        this.myDog = name;
    }
    return Dog;
}());
var dogs = new Dog('德牧');
console.log(dogs.myDog);
// dogs.myDog = '23'
// 抽象类
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    return animal;
}());
// 抽象类
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.sayName = function () {
        return "".concat(this.name, " + dog");
    };
    return dog;
}(animal));
var cats = /** @class */ (function (_super) {
    __extends(cats, _super);
    function cats() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cats.prototype.sayName = function () {
        return "".concat(this.name, " + dog");
    };
    return cats;
}(animal));
var Dogs = new dog('二哈');
console.log(Dogs.sayName());
var TG = /** @class */ (function () {
    function TG() {
        this.money = '109';
    }
    return TG;
}());
// 类继承类且实现多个接口
var GT = /** @class */ (function (_super) {
    __extends(GT, _super);
    function GT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GT.prototype.hello = function () {
        console.log('hello');
    };
    GT.prototype.sayName = function () {
        console.log('sayName');
    };
    return GT;
}(TG));
var gt = new GT();
gt.hello();
gt.sayName();
console.log(gt.money);
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.sayName = function () {
        console.log('实现C');
    };
    return C;
}());
var cccc = new C();
cccc.sayName();
var vc = {
    name: '123',
    sex: '123'
};
console.log(vc);
// 接口可以继承类(TS特有)，当声明了一个类point时，除了声明了一个类外，还创建了一个point的类型
var point = /** @class */ (function () {
    function point(x, y) {
        this.x = x;
        this.y = y;
    }
    point.prototype.sayName = function () {
        console.log("".concat(this.x));
        console.log("".concat(this.y));
    };
    return point;
}());
var myPoint = new point('xx', 'yy'); // 实例化类
myPoint.sayName();
// point类型
var myPoint_1 = {
    x: '32432',
    y: 'y123',
    sayName: function () { }
};
console.log(myPoint_1.x);
myPoint_1.sayName();
var sd = {
    name: '123',
    age: '19',
    tea: function (x) {
        return x;
    },
    cat: function (x) {
        return x;
    }
};
console.log(sd.tea('茶'));
console.log(sd.cat('猫'));
var User = /** @class */ (function () {
    function User(n, a) {
        this.name = n;
        this.age = a;
    }
    User.prototype.info = function () {
        return "".concat(this.name, "\u7684\u5E74\u9F84\u662F ").concat(this.age);
    };
    return User;
}());
var hd = new User('后盾人', 12);
var xj = new User('向军', 18);
console.log(hd);
var userss = [hd, xj];
console.log(userss);
var Pig = /** @class */ (function () {
    function Pig() {
        this.name = 'peiqi';
    }
    Pig.prototype.say = function () {
        console.log(this.name + '123');
    };
    return Pig;
}());
var pigzhu = new Pig();
pigzhu.say();
var PigOne = /** @class */ (function (_super) {
    __extends(PigOne, _super);
    function PigOne() {
        return _super.call(this) || this;
        // console.log(this.name);
    }
    PigOne.prototype.sayName = function () {
        console.log(this.name);
    };
    return PigOne;
}(Pig));
var zhuzhu = new PigOne();
zhuzhu.sayName();
