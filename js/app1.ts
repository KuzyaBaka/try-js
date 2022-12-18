let str: string = `string`;

let num: number = 1;

let bull: boolean = true;

let dog: string | number = 1;

let arr: number[] = [1, 2, 3];

interface IValue {
  v: string;
}
interface IObj {
  a: number;
  b: string;
  c: boolean;
  d?: number;
  e: IValue;
}
let obj: IObj = {
  a: 1,
  b: `str`,
  c: true,
  d: 2,
  e: {
    v: `srt`,
  },
};

/* const num1 = 1;
const num2 = 2;
const num3 = 3; */

enum numMember {
  num1 = 1,
  num2 = 2,
  num3 = 3,
} // Нельзя использовать

// import { numMember } from `.app1.ts`
// numMember.num1

/* let a: any = 2;
a = `qwe` */ // unknown - для API
// import {num1} from `./app1.ts`

function getNum(a: number, b: number): void {
    console.log(2)
}
// void - для функции, которая ничего не возвращает

// ТС нужен для типизации и отлова ошибок в коде