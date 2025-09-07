import {Pet} from './Pet.js';
import { autoDecreaseStatus } from './gameLogic.js'


// Petインスタンスの生成とメソッドの実行
const myPet = new Pet('ポチ', '犬');

// グローバルスコープ（windowオブジェクト）にmyPetを公開
window.myPet = myPet;

//初期状態を確認
console.log("--- 初期状態 ---")
myPet.getStatus();


myPet.feed();
myPet.play();
myPet.getStatus();

// ペットの状態を自動で減らす処理を開始
console.log("--- 3秒ごとに状態が自動で減少します ---");
autoDecreaseStatus(myPet);

// しばらく待ってから状態を確認
setTimeout(() => {
    console.log("\n--- 5秒後の状態 ---");
    myPet.getStatus();
}, 5000);


// 別のペット（猫）のインスタンスを作成して操作
const anotherPet = new Pet('タマ', '猫');

console.log("\n--- 別のペットを操作 ---");
anotherPet.getStatus();
anotherPet.feed();
anotherPet.play();
anotherPet.getStatus();

//やっほ