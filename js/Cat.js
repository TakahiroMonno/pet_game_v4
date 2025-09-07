import { Pet } from './Pet.js';

export class Cat extends Pet {
    constructor(name) {
        super(name, 'ネコ'); // 親クラスを継承することで、feedやplayなどのメソッドを利用可能にする
    }
    meow(){
        console.log("ニャーニャー");
    }

}