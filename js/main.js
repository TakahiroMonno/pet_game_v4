import {Pet} from './Pet.js';
// import { autoDecreaseStatus } from './gameLogic.js'
// import {Dog} from './Dog.js'
// import {Cat} from './Cat.js'
// import { randomEvent } from './gameEvents.js'
import {PetManager} from './PetManager.js'
import {Item} from './Item.js'

//グローバルスコープに公開
window.Pet = Pet;
// window.autoDecreaseStatus = autoDecreaseStatus;
// window.Dog = Dog;
// window.Cat = Cat;
// window.randomEvent = randomEvent;
window.PetManager = PetManager;
window.Item = Item;

// PetManagerインスタンスを生成
const manager = new PetManager();
//デバックの時だけ、グローバルスコープに公開
window.manager = manager;


// ペットとアイテムのインスタンスを生成
const dog = new Pet('ポチ', '犬');
const cat = new Pet('ミケ', '猫');

const bone = new Item(1, '骨', 'food', { hunger: 30, energy: -5 });
const toy = new Item(2, 'おもちゃ', 'play', { hunger: -5, energy: 20 });
const potion = new Item(3, '回復薬', 'special', { energy: 50, hunger: 0 });
const clothes = new Item(4, '服', 'special', {hunger: -5, energy:-5})

// ペットを名鑑に追加
manager.addPet(dog); //addPetはPetManagerクラスのメソッド
manager.addPet(cat);

// アイテムを管理リストに追加
manager.items.push(bone, toy, potion, clothes);
console.log("--- アイテムリスト ---");
console.log(manager.items);

// 1. ペット名鑑を表示
manager.listAllPets();

// 2. アイテムを使用
manager.useItem('ポチ', '骨');

// 3. 別のアイテムを使用
manager.useItem('ミケ', '回復薬');

// 4. ペットを削除
manager.removePet('ミケ');

// 5. 状態の変化を確認
manager.listAllPets();

/*
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

*/
