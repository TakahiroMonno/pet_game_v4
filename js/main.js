import {Pet} from './Pet.js';
import { autoDecreaseStatus } from './gameLogic.js'
import {Dog} from './Dog.js'
import {Cat} from './Cat.js'
import { randomEvent } from './gameEvents.js'
import {PetManager} from './PetManager.js'
import {Item} from './Item.js'

//グローバルスコープに公開
window.Pet = Pet;
window.autoDecreaseStatus = autoDecreaseStatus;
window.Dog = Dog;
window.Cat = Cat;
window.randomEvent = randomEvent;
window.PetManager = PetManager;
window.Item = Item;
window. 


addPet(Choko)
items = [
    new Item(1, 'ドッグフード', 'food', {hunger: 20}),
    new Item(2, 'キャットフード', 'food', {hunger: 20}),
    new Item(3, 'おもちゃ', 'toy', {energy: 15})
]
petManager = new PetManager([choko, mike], items);
petManager.
listAllPets()
useItem(choko, 'ドッグフード')
listAllPets()
removePet(mike)



const choko = new Dog('チョコ');
window.choko = choko;
console.log("--- 犬の初期状態 ---");
// 継承されたメソッドと子クラス特有のメソッドを呼び出す
console.log("\n--- 犬の行動 ---");
choko.play();
choko.bark();

// 5秒ごとにランダムイベントを発生させる
console.log("\n--- 5秒ごとにランダムイベントが発生します ---");
setInterval(() => {randomEvent(choko)}, 5000);
//setIntervalの中で引数付き関数を呼び出す場合は、無名関数でラップする
//setIntervalは返り値を持たないため　誤った例：setInterval(randomEvent(choko), 5000);
choko.getStatus();

/* ... 
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

setInterval(randomEvent, 5000);

// 別のペット（猫）のインスタンスを作成して操作
const anotherPet = new Pet('タマ', '猫');

console.log("\n--- 別のペットを操作 ---");
anotherPet.getStatus();
anotherPet.feed();
anotherPet.play();
anotherPet.getStatus();
*/ 