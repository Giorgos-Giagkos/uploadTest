// export{}
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1,true,'b'];

// const ColorRed =0
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color {Red = 0,Green = 1,Blue = 2};

// let backgroundColor = Color.Red;

// let message ;
// message = 'abc';
// let endsWithC =(<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

import { Point } from './points';

let point = new Point(1, 2);
point.x = 2;

const sakis: string = 'sakis';

let name: 'sakis' = 'sakis';

function userAlert(): never {
	throw new Error('fail');
}
