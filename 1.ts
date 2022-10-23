let cc :string = '123'

// let nums = '123' 
// console.log(nums);

let strs:string 
// strs = 123
// nums.set()

let nums
nums = 123
nums = '123' as unknown as number

let numss:any = 12
numss = '123'
numss = true
numss = undefined
numss = null 
numss = function () {}

let hh: string | number | boolean
hh = '123'
hh = 123
hh = undefined as unknown as string
console.log(typeof(hh));

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
let array: number[] = [1,2,3] 
// 泛型定义
let Arr:Array<number | string> = []
// 接口定义
interface happy {
    // 表示索引是数字时，值也必须是数字
    [index:number]: number
}
let resArr: happy = [1,2,3]

// 类数组-- 不能用普通数组形式来表现，应该使用接口形式
function fn() {
    let args: {
        [index:number]: number,
        length:number
    }= arguments

}
Arr.push('123')

//  函数
//  函数声明
function fn1(x:number,y:string): string | number {
    return x + y
}
console.log(fn1(1,'2'));  // '12'

// 此处第一个=>不是箭头函数，左边为输入类型，右边为输出类型，第二个=>表示为箭头函数
let fn2: (x:number,y:number) => number = (x:number,y:number):number => {
    return x + y
}
console.log(fn2(5,9));

// 接口定义函数，对等号左侧函数进行类型限制，保证后续函数的参数个数，类型，返回值类型不变
interface Fn {
    (x:number,y:number): number
}
let fn3:Fn = function (x:number,y:number): number {
    return x + y
}
console.log(fn3(1,2));

// 可选参数 必须写在必须参数后
let fn4 = function (x:number,y:number,z?:number): number {
    return x + y
}
console.log(fn4(1,2));

// 参数默认值
// TS会将添加默认值的形参转化为可选参数，此时可以写在必传参数前面
let fn5 = function (x:number = 2,y:number): number {
    return x + y
}
console.log(fn5(undefined,2)); // 4

// 剩余参数
let fn6 = function (x:number,...rest:any []) {
    console.log(...rest);
    
}
console.log(1,2,3,4);

// 重载---允许函数接受不同类型或数量的参数进行处理
// 可预先定义多种函数定义，最后一次将函数实现
function fun(x:number):number;
function fun(x:string):string;
function fun (x:number | string): string | number | void {
    if(typeof(x) === 'number') {
        return x.toString().trim().split('').reverse().join('')
    }
    return x.trim().split('').reverse().join('')
}
// console.log(fun(123));
console.log(fun('143'));


// 类型别名 简化定义语法
type more = (string | number | boolean) []

let aaa:more = [1,2,'3']
let bbb:more = [1,'2',true]

// 接口继承---extends
// 继承公共的属性和方法

interface Father {
    x: number
    y: string
}
interface sons extends Father {
    z: number
}
let p: sons = {
    x: 1,
    y: '2',
    z: 3
}
console.log(p);

// 类型断言---使用as关键字手动指定一个值的类型
// 1：将联合类型断言为其中某个类型
// 不确定联合类型的变量是什么类型时，只能访问联合类型中共有的属性和方法
// 2: 将父类断言为子类
// 3：任何类型都可被断言为any
// 4：any可以被断言为任何类型
interface Cat {
    name: string
    run(): void
}
interface Fish {
    name: string
    id: number
    swim():void 
}

let cat: Cat = {
    name: '猫',
    run() {console.log('run');
    }
}
let fishs:Fish = {
    name: '鱼',
    id: 1,
    swim() {
        console.log('fish');
    }
}

function getName(animal: Cat | Fish) {
    // return animal.name 可访问到共有属性name
    return (animal as Fish).id
}

console.log(getName(cat));

function getX(x:any): boolean {
    return x
}

console.log(getX(1));

let str:string = '123' // 宽泛类型
let str1: '555' = '555'  // 值类型
const str2 = '3443' // 值类型

let str3 = '123' as const // 将宽泛类型转为值类型
let arr4 = [1,2,str,str1] as const  // 1,2,string,555

// 元组对于类型的数量和顺序都有限制
let ar1:[string, number]
ar1 = ['qwe',213]
// ar1 = [123,'q3we']
ar1[0] = '23'
// ar1[0] = 123

// 常规定义数组联合类型 顺序和数量没有限制
let ar2: (string | number) [] 
ar2 = [123,123, '123',123] 

// 泛型定义联合类型 顺序数量没有限制，元组有限制
let ar4:Array<number | string> = []
ar4 = ['123',123,123,'123']

var obj3:object = {
    name: 'zs'
}
let str4: string = '123'
enum ar5 { a = 1.5, b = -3, c, d = str4.length}
console.log(ar5.a);
console.log(ar5.b);
console.log(ar5.c);
console.log(ar5.d);

enum enums {
    first,
    second,
    third
}
// let arc = [enums.first,enums.second,enums.third]
let arv = [enums.first,enums.second]
// console.log(arc);
console.log(arv);


interface A {
    [index: string]: number,
    [prop:number]: number
}

class M {
    public name;
    constructor(na: string) {
        this.name = na
    }
    sayHi() {
        return `${this.name}`
        
    }    
}
let xiaoMing = new M('小明')
console.log(xiaoMing.sayHi());
console.log(xiaoMing);

class Son extends M {
    sayHi():string {
        return `son调用M ${super.sayHi()}`
    }

}
let son1 = new Son('儿子')
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


class zoo {
    tiger:string = '213';
    constructor (name:string) {
        this.tiger = name
    }
}

class myZoo extends zoo {
    constructor (tiger:string) {
        super(tiger)
        console.log(this.tiger);
        
    }
}
let myTiger = new zoo('老虎')
console.log(myTiger.tiger);
let myTigers = new myZoo('小老虎')

class Dog {
    readonly myDog: string = '二哈';
    constructor (name: string) {
        this.myDog = name
    }
}

let dogs = new Dog('德牧')
console.log(dogs.myDog);
// dogs.myDog = '23'

// 抽象类

abstract  class animal {
    public name: string;
    constructor(name:string) {
        this.name = name
    }
    abstract sayName():void
}

// 抽象类
class dog extends animal {
    sayName() {
        return `${this.name} + dog`
    }
}

class cats extends animal {
    sayName() {
        return `${this.name} + dog`
    }
}

let Dogs = new dog('二哈')
console.log(Dogs.sayName());

// let g = new animal()

// 多态 
// f在定义时是animal类型，具体是dog还是cats要new了才知道
// let f: animal;
// f = new dog('小鱼')
// console.log(f.sayName());

// 类与接口
// 实现(implement)是面向对象编程的概念，大多情况下，类只能继承另一个类，类的共性可以提取为接口，使用implement关键字实现，
interface all {
    sayName(): void
}

interface JK {
    hello(): void
}

class TG {
    money: string = '109'
}
// 类继承类且实现多个接口
class GT extends TG implements JK, all {
    hello() {
      console.log('hello');
    }
    sayName(): void {
        console.log('sayName');
        
    }
    

}

let gt = new GT()
gt.hello()
gt.sayName()
console.log(gt.money);


class C implements all {
    sayName(): void {
        console.log('实现C');
        
    }
}
let cccc = new C()
cccc.sayName()


// 接口可以继承接口

interface q {
    name: string;

}
interface w extends q {
    sex: string
}
let vc: w = {
    name: '123',
    sex: '123'
}
console.log(vc);


// 接口可以继承类(TS特有)，当声明了一个类point时，除了声明了一个类外，还创建了一个point的类型
class point {
    x: string;
    y:string;
    constructor(x:string,y:string) {
        this.x = x
        this.y = y
    }
    sayName() {
        console.log(`${this.x}`);
        console.log(`${this.y}`);
        
        
    }
}
let myPoint = new point('xx','yy')  // 实例化类
myPoint.sayName()

// point类型
let myPoint_1: point = {
    x: '32432',
    y: 'y123',
    sayName() {}
}
console.log(myPoint_1.x);

myPoint_1.sayName()

// 声明合并

interface mn {
    name: string,
    tea(x:string): void
}

interface mn {
    age: string,
    cat(x:string): void
}

let sd: mn = {
    name: '123',
    age:'19',
    tea(x: string): string {
       return x
    },
    cat(x:string): string {
        return x
    }
}

console.log(sd.tea('茶'));
console.log(sd.cat('猫'));

class User {
    name: string
    age: number
    constructor(n: string, a: number) {
        this.name = n
        this.age = a;
    }

    info(): string {
        return `${this.name}的年龄是 ${this.age}`
    }
}


const hd = new User('后盾人', 12);
const xj = new User('向军', 18)
console.log(hd);

const userss: User[] = [hd, xj];
console.log(userss);

class Pig {
    protected name:string = 'peiqi'
    say() {
        console.log(this.name +'123');

    }    
}
let pigzhu = new Pig()
pigzhu.say()
class PigOne extends Pig {
    constructor() {
        super()
        // console.log(this.name);
    }
    sayName() {
        console.log(this.name);
        
    }
}
let zhuzhu = new PigOne()
zhuzhu.sayName()

export {}