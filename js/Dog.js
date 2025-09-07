import { Pet } from './Pet.js';

export class Dog extends Pet {
    constructor(name) { //犬に特化したクラスのため、typeは不要
        super(name, '犬'); // 親クラスを継承することで、feedやplayなどのメソッドを利用可能にする
    }
    bark(){
        console.log(`${this.name}: ワン！ワン！`);
    }

}