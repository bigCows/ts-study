


// interface JK {
//     hello(): void
// }

// class TG {

// }

// class GT  extends TG implements JK {
//     hello() {
//       console.log('hello');
        
//     }
// }

// let gt = new GT()
// gt.hello()
// class VB {
//     readonly age: number = 12
//     constructor(x:number) {
//         this.age = x
//     }    
// }

// interface xx {
//     readonly name: string
// }

// let obj: xx = {
//     name: 'zs'
// }
// // obj.name = 'sa' 报错 属性为只读
// let asd: {readonly name: string} = {
//         name : '342'
// }
// // asd.name = 123 报错 属性为只读

// type fn = (x:string) => void

// type obj = {
//     name: string
// }

// interface fun {
//     get(x:string): void
//     y:string
// }

// interface obj1 {
//     name: string
// }

// // 接口继承使用extends
// // 接口继承接口
// interface fun1 extends fun { 
    
// }
// let con: fun1 = {
//     get(x:string) {},
//     y:'132'
// }
// // 接口继承type
// interface fun2 extends obj {
//     sex: string
// }
// let con1:fun2 = {
//     name: 'ls',
//     sex: 'boy'
// }

// // type继承使用 交叉类型 
// // type继承type
// //  type fnn = fn & {x:string}

// type cul = fun2 & obj1 

// let culs: cul = {
//     sex: 'sad',
//     name: 'wq'
// }

// interface A {
//     fn: (x:string) => string
// }
// interface B extends A {
//     fn: (x:number) => string
// }

interface A {
        fn(x:number): void
    }
interface B {
        say(x:number): void
    }

let wolf: A&B = {
    fn(x:number) {
        console.log('wolf-fn');
        return x
    },
    say(x:number): string {
        console.log('wolf-say');
        return x
    }
}

console.log(
    wolf.say(1)
);




// class MM {
//     name: 'sz';
//     sex: 'za';
//     say(x:string) {
//         console.log('xxyy', `${x}`);
        
//     }
// }

// let mm = new MM()
// mm.say('haha')
// interface NN {
//     name: string;
//     sex: string;
//     say(x:string): string
// }

// interface NN {
//     name: string
//     say(x:string): string
// }

// interface all {
//     sayName(): void
// }

// interface JK {
//     hello(): void
// }

// class TG {
//     money: string = '109'
// }

// // 类继承类且实现多个接口
// class GT extends TG implements all {
//     hello() {
//       console.log('hello');
//     }
//     sayName(): void {
//     console.log('sayName');
    
// }

// }

 




// //  let fnn1: fnn = 

// // 接口和class的兼容性都是参数少的兼容参数多的 多的可以赋值给少的

// // 参数个数影响(参数类型为原始类型)：函数参数多的兼容函数参数少
// type F1 = (x:string)=> void
// type F2 = (y:string,x:string) => void

// let Fn1!: F1
// let Fn2: F2 

// Fn2 = Fn1

// // 1.函数参数类型为原始类型(string,number,boolean)时，参数类型一致即可兼容
// // 2.函数参数类型为对象类型时，对象参数少的兼容参数多的(多的赋值少的)
// interface fn2_1 {x:string,y:string}
// interface fn3_1 {y:string}
// type fn2 = (x: fn2_1) =>void
// type fn3 = (x:fn3_1) => void 
// let fn2_11!: fn2
// let fn3_11!: fn3

//     fn2_11 = fn3_11

// // 函数返回值兼容性
// type fn_1 = () => string
// type fn_2 =() => string

// let fn_11:fn_1
// let fn_112!:fn_2

// // 返回值为原始类型，类型相同即可兼容
// fn_11 = fn_112
// fn_112 = fn_11

// // 返回值为对象类型，参数少的兼容多的(多的可赋值少的)

// type point2D = () => {x:string}
// type point3D = () => {x:string,y:string}

// let p2d: point2D
// let p3d!:point3D

// p2d = p3d


 // 泛型

function users<T>(x: T): T {
    return x
}

let myUser = users('x')
let isUser = users(999)
 
console.log(myUser);
console.log(isUser);
