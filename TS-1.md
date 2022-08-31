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
### 类型断言---使用as关键字手动指定一个值的类型
- 1：将联合类型断言为其中某个类型
  
  不确定联合类型的变量是什么类型时，只能访问联合类型中共有的属性和方法
- 2: 将父类断言为子类
- 3：任何类型都可被断言为any
- 4：any可以被断言为任何类型
```typescript

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
    // 将联合类型断言为其他类型
    return (animal as Fish).id
}

console.log(getName(cat));
```
- 断言不是类型转化，只作用在编译过程中，不能影响变量最终输出结果
  
```typescript
function getX(x:any): boolean {
    // return x // 1
    return Boolean(x)
}

// console.log(getX(1)); // 1
console.log(getX(1)) // true
```
### as const 
- const可将宽泛类型转为值类型
```typescript
let str:string = '123' // 宽泛类型
let str1: '555' = '555'  // 值类型
const str2 = '3443' // 值类型

let str3 = '123' as const // 将宽泛类型转为值类型
let arr4 = [1,2,str,str1] as const  // 1,2,string,555
```

### 声明文件（.d.ts结尾的文件）---存放js文件类型信息的文件
- 使用@type统一管理第三方库的声明文件
```typescript
 npm install @types/jquery -D
```
- 在声明文件中，只有function,class,interface可以直接导出，其余变量需要先declare定义，再导出

### 元组--合并不同类型的对象集合
```typescript
let ar1:[string | number]
ar1 = ['qwe',213]
ar1 = [123,'q3we'] // 元组的数据顺序和数量是固定的，字符串在前，数字在后
```
### 枚举-- 常数项枚举、计算所得项枚举、外部枚举、字符串枚举（成员没有自增长行为，必须有初始值）
```typescript
let str4: string = '123'
enum ar5 { a = 1.5, b = -3, c, d = str4.length}
console.log(ar5.a); // 手动赋值可为小数
console.log(ar5.b); // 手动赋值可为负数
console.log(ar5.c); 
console.log(ar5.d); // 计算所得项之后不能跟未手动赋值的项，否则会报错

// 通过declare定义外部枚举，未指定初识值的外部枚举项都是计算所得项，转译为JS时会擦除外部枚举的定义
declare enum enums {
    first,
    second,
    third
}
// 也可通过declare const 同时定义枚举
declare const enum enums {
    first,
    second,
    third
}
```
### 类
- 没有变量提升，所有方法不可枚举
- 使用class定义
- 使用extends继承
- es6 static 定义静态方法，不用实例化类，可通过类直接调用,es7 可以定义静态属性
- 修饰符
  
  三种修饰符 访问[public,private,protected] 静态static 只读readonly
    - 修饰属性和方法
      - public---默认    公共属性和方法
         ```typescript
        class zoo {
            public tiger;
            public  constructor (name:string) {
                this.tiger = name
            }
        }

        let myTiger = new zoo('老虎')
        console.log(myTiger.tiger); // 老虎       
         ```
      - private    私有：只能在类的内部访问
      - protected  继承+私有：允许在类内和子类中访问
    - 修饰构造函数
        - private 该类不允许被继承或实例化
        - protected 该类只允许被继承
    - readonly

        只读属性可在定义时赋值，还能在构造函数中修改值，只读限制在改属性初始化之后不可修改
        ```typescript
        class Dog {
            readonly myDog: string = '二哈';
            constructor (name: string) {
                this.myDog = name
            }
        }

        let dogs = new Dog('德牧')
        console.log(dogs.myDog);
        // dogs.myDog = '23' 报错，该属性为只读 
        ```
    - 抽象类 abstract---不允许被实例化，抽象方法只能被子类实现 

        抽象类可以没有抽象方法，但抽象方法的类必须生命为抽象类
    ```typescript
      abstract class animal {
          public name: string;
          constructor(name:string) {
              this.name = name
          }
          abstract sayName():void
      }

        class dog extends animal {
          sayName() {
              return `${this.name} + dog`
          }
      }

      // let g = new animal() 报错：无法创建抽象类的实例
      let Dogs = new dog('二哈')  
      console.log(Dogs.sayName()); // 通过子类实现抽象类的抽象方法
      ```
