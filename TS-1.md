# 变量

### 声明变量且声明类型
```typescript
let num: number = 18;
```

### 类型注解

    类型注解值变量在初始化完成后，不可重新赋值为其他数据类型

### 数据类型（与JS基本一致）
- 基础数据类型
  
  undefind和null类型只本身一个值，不可重新赋值
  字符串加+转化为数字
  ```typescript
  let a: undefind = undefind
  let b: null = null
  console.log(2 - +'1') // 1
  ```
- 引用数据类型

### 泛型声明
```typescript
    let arr: Array<string | number> = [] // 泛型声明
    let abc:Array<any> = []
    abc.push('123',123,false,{})
```

### 声明对象，不限定值，可改值
```typescript
    let obj: object = []
    obj = {}
```
### 声明对象，限定值
```typescript
    let obj: {name: string, age: number, url?:string}
     // 此处url后的？表示在给对象赋值时，url为可选择参数
    obj = { name:'zs', age: 12}
```
### 组合声明
```typescript
    let arr1: (string | boolean) [] = ['1',true]
    console.log(arr1);
```
### 创建TS配置文件

    tsc --init

### any声明变量，和原生JS没有区别,失去了TS类型特征，尽量少用！！！

```typescript
    let every: any = []
     every = '123'
     every = {}
     every = class name {
     }

    //  此项为tsconfig.json中的配置项,由于ts在编译阶段遇到错误也会编译完成，只有在执行结果中才能看到错误，而想要在编辑阶段发现错误，就应用此配置
     "noImplicitAny": true,
```
### unknown 未知类型

```typescript
// unkonwn是未知类型，不能直接赋值给另外的变量，可通过 as 关键字将未知类型转化为字符型
let mxf:unknown = 'nan'
let mxf1:string = mxf as string
console.log(mxf1); // 'nan'

// 通过as将字符型转为未知型，再将未知型转为数字型，达到了变量类型转换
let mxf2:string = '18'
let age:number = mxf2 as unknown as number
console.log(age); // 18
```

### 类型推论
- 未指明类型或未赋值都会触发类型推论
- 未指定类型且未赋值，会被认为是any类型
- 赋值且为指定类型会认为是该值的类型
```typescript
// 未指定类型,但是赋值，变量会被推论为字符型
let nums = '123' // 字符型
nums = 123

let num  // any型，可任意更改类型
num = 123
``` 
### 类型别名
- 相同类型变量声明时可使用类型别名简化语法
```typescript
type more = (string | number | boolean) []

let aaa:more = [1,2,'3']
let bbb:more = [1,'2',true]
```

### 对象的类型--接口
  
```typescript
// 定义Type类型
// readonly：表示该属性是只读属性,只读 限制tom在初始化对象是是否存在id属性，且id不能通过tom.改变
// ？表示该属性可选
interface Type {
    name: string,
    readonly id: number,
    age12?: number,
    [sex: string]: string | number
}
//  tom的类型是Type，所以tom的属性初始化必须和Type相同，不能多不能少，
// 由于添加了任意属性，所以tom在初始化时可额外添加abc属性
let tom: Type = {
    name: 'cat',
    id: 12,
    age12: 19,
    sex: 'boy',
    abc:'123'
}
```

### 数组声明
``` typescript
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
```

### 函数
- 函数声明
```typescript
function fn1(x:number,y:string): string | number {
    return x + y
}
console.log(fn1(1,'2'));  // '12'
```

- 此处第一个=>不是箭头函数，左边为输入类型，右边为输出类型，第二个=>表示为箭头函数
```typescript
let fn2: (x:number,y:number) => number = (x:number,y:number):number => {
    return x + y
}
console.log(fn2(5,9));
```

- 接口定义函数，对等号左侧函数进行类型限制，保证后续函数的参数个数，类型，返回值类型不变
```typescript
interface Fn {
    (x:number,y:number): number
}
let fn3:Fn = function (x:number,y:number): number {
    return x + y
}
console.log(fn3(1,2));
```
- 可选参数 必须写在必须参数后
```typescript
let fn4 = function (x:number,y:number,z?:number): number {
    return x + y
}
console.log(fn4(1,2));
```
- 参数默认值
- TS会将添加默认值的形参转化为可选参数，此时可以写在必传参数前面
```typescript
let fn5 = function (x:number = 2,y:number): number {
    return x + y
}
console.log(fn5(undefined,2)); // 4
```
- 剩余参数
```typescript
let fn6 = function (x:number,...rest:any []) {
    console.log(...rest);
}
console.log(1,2,3,4);
```
- 重载---允许函数接受不同类型或数量的参数进行处理
- 可预先定义多种函数定义，最后一次将函数实现
```typescript
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
```

- 接口继承---extends
- 继承公共的属性和方法
```typescript
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
```
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