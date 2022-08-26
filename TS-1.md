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