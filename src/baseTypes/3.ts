/*let some:unknown;
some = 'Text';
let str: string;
str = some;

export {};*/
/*
let some: unknown;
some = 'Text';

let str: string;
str = some as string;
*/
let some: unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
  str = some; 
} else {
}
/*---DONE---*/