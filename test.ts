// // 1. cases
// let a: number = 4;
// let b = 'safgf';
// let c = true;


// let d: string [] = ['abc', 'dse'];
// let e: any =3;

// function test(a: string):number | string{
//     return ''
// }

// const test2 =(a:number):void =>{
//     return ;
// }
// d = d.map((x:string)=>x.toLowerCase())
// function countCoord(coord: {lat:number, long?:number }) {

// }
// function printIt(id:number | string){
//     if(typeof id === 'number') {
//         console.log(id.toString());
//     }else if (typeof id === 'string') {
//         id.toUpperCase()
//     }
// }
// function getSum (a:number |number[]) {
//     if(Array.isArray(a)) {

//     }
// }
// const x: undefined = undefined;
// const z: null = null;



// // 2.
// type Point = {
//     x:number, 
//     y:number
// };

// type D3Point = Point & {
//     z:number;
// }

// interface IPoint {
//     x: number,
//     y: number
// };

// interface I3DPoint extends IPoint {
//     z:number;
// }

// type stringOrNumber = string | number;

// const c=(point:IPoint)=> {
//     const d: I3DPoint = point as I3DPoint;
// }

// const myCanvas = document.getElementById('canvas') as HTMLCanvasElement


// function print(coord: Point) {

// }

// interface ITest {
//     a: number;
// }
// interface ITest {
//     b: number;
// }

// // ***Exercise 1 ***

// interface Info {
//     desc: string;
//     isActive: boolean;
// }

// interface Tags {
//     name: string;
//     value: number;
// }
// interface CommonInfo {
//     userId: number;
//     id: number;
//     title: 'string';
//     info: Tags[];
//     tags: Tags [];
// }

// ******


// //  3. Литеральные типы
// let c: 'test'= 'test';

// type actionType = 'up'| 'down';

// function performAction (action: actionType | ComplexAction){
//     switch (action){
//         case 'down':
//             return -1;
//         case 'up':
//             return 1;
//     }
// }

// interface ComplexAction {
//     s: string;
// }

// // 4. Enum
// enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT'
// }

// enum Decision {
//     Yes = 1,
//     No =calcEnum()
// }

// function calcEnum (){
//     return 2;
// }

// function runEnum(obj: {Up:string}) {

// }

// runEnum(Direction)

// enum Test {
//     A
// }

// let test = Test.A;
// let nameA =Test[test]

// const enum ConstEnum {
//     A,
//     B
// }
// let c= ConstEnum.A

// enum Dice {
//     One= 1,
//     Two,
//     Three
// }

// function ruDice(dice:Dice){
//     switch(dice){
//         case Dice.One:
//             return 'one';
//         case Dice.Two:
//             return 'two';
//         case Dice.Three:
//             return 'three';
//         default:
//             const a:never = dice;
//     }
// }
// // 5.Tuple  Кортеж
// const a: [number, string, number] = [0,'a',1]

// a.push(1);
// a.map (s=>{
//     switch(typeof s) {
//         case 'string':
//             break;
//     }
// });

// const [c,d,f ] = a;
// const [m, ...y] =a;

// // 6.Generics
// function logTime<T>(num:T):T {
//     console.log(new Date());
//     return num; 
// }
// function logTime2<T>(num:T):T {
//     if (typeof num === 'string') {
//         num.toLocaleUpperCase();
//     }
//     return num; 
// }
// interface MyInterface{
//     transform: <T, F>(a:T)=> F
// }

// class MyGenClass<T> {
//     value: T
// }

// interface TimeStamp {
//     stamp: number;
// }

// function logTimeStamp<T extends TimeStamp>(num: T): T{
//     console.log(num.stamp)
//     return num;
// }


