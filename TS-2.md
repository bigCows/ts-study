## type与interface

```typescript
    // 都可以表示函数或对象
    type fn = (x:string) => void

    type obj = {
        name:'zs'
    }

    interface fun {
        (x:string): void
    }

    interface obj1 {
        name:'zs'
    }
    // 继承与法差异
    // interface使用extends关键字
    // type使用 &

    interface fun1 extends fun { 
        y:string
    }
    let con: fun1 = {
        y: '12y',

    }
```
## 类型兼容性
- 对象和接口: 参数少的兼容多的(多可以赋值少)
- 函数：受 参数个数 参数类型 参数返回值 三点影响
```typescript
// 参数个数影响(参数类型为原始类型)：函数参数多的兼容函数参数少
type F1 = (x:string)=> void
type F2 = (y:string,x:string) => void

let Fn1: F1
let Fn1:F1 =() => {}
let Fn2: F2 
 
Fn2 = Fn1

// 1.函数参数类型为原始类型(string,number,boolean)时，参数类型一致即可兼容
// 2.函数参数类型为对象类型时，对象参数少的兼容参数多的(多的赋值少的)
interface fn2_1 {x:string,y:string}
interface fn3_1 {y:string}

type fn2 = (x: fn2_1) =>void
type fn3 = (x:fn3_1) => void 

let fn2_11!: fn2
let fn3_11!: fn3

fn2_11 = fn3_11

// 函数返回值兼容性
type fn_1 = () => string
type fn_2 =() => string

let fn_11:fn_1
let fn_112!:fn_2

// 返回值为原始类型，类型相同即可兼容
fn_11 = fn_112
fn_112 = fn_11

// 返回值为对象类型，参数少的兼容多的(多的可赋值少的)
type point2D = () => {x:string}
type point3D = () => {x:string,y:string}

let p2d: point2D
let p3d!:point3D

p2d = p3d
```
## 交叉类型 & 
- 功能类似于继承，将多个类型组合为一个类型
```typescript
interface obj1 {
    name: string
}
interface fun2 {
    sex: string
}
type cul = fun2 & obj1 

let culs: cul = {
    sex: 'sad',
    name: 'wq'
}
```
- 交叉类型和接口继承的区别
  - 同：都可以实现对象类型组合
  - 异：交叉类型会将同名参数的类型作为联合类型，继承在处理同名参数类型不同时会报错
```typescript
    interface A {
        fn: (x:string) => string
    }
    // 此处B会报错，不能将string分配给number，x类型不兼容
    interface B extends A {
        fn: (x:number) => string
    }

    interface A {
        fn: (x:string) => string
    }
    // 此处B会报错，不能将string分配给number，x类型不兼容
    interface B {
        fn: (x:number) => string
    }
    type C= A & B  // 相当于 fn:(x:string | number) => string
```
### 泛型
- 泛型可以自己推断传入的数据类型，并且全局应用，在定义时可以省去类型定义，可在实现时定义具体类型