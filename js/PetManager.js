import { Pet } from './Pet.js';
import { Item } from './Item.js';

export class PetManager {
    //constructorの引数は不要
    //PetManagerの役割は、空のペットとアイテムのリストを自身で作成・管理すること
    constructor() {
        //初期化
        this.pets = []; //例：[{name: 'ポチ', type: '犬', hunger: 50, energy: 100}, ...]
        this.items = []; //例：[{id: 1, name: 'ドッグフード', type: 'food', effect: {hunger: 20, energy: 0}}, ...]
    }

    addPet(pet) {
        this.pets.push(pet);
        console.log(`${pet.name}をペット名鑑に追加しました。`);

    }

    //filterメソッド：元の配列から、特定の条件に一致する要素だけを選び出して、新しい配列を作成
    //コールバック関数の引数には、配列の各要素が順番に渡される
    removePet(petName) {
        const initialLength = this.pets.length;
        //petNameと一致しないペットのみを新しい配列にして、this.petsに再代入
        this.pets = this.pets.filter((pet) => {pet.name !== petName});
        console.log(`${petName}をペット名鑑から削除しました。`);
        if (this.pets.length < initialLength) {
        console.log(`${petName}をペット名鑑から削除しました。`);
        } else {
        console.log(`エラー: ${petName}は見つかりませんでした。`);
        }
    }

    //findメソッド:条件に一致する最初の1つだけの要素を返す
    //コールバック関数を引数とする
    //
    findPet(petName) { 
        return this.pets.find(pet => pet.name === petName);
    }

    listAllPets() {
        console.log("=== ペット名鑑 ===");
        this.pets.forEach(pet => pet.getStatus());
    }//petはforEachメソッドが逐次処理を行うために、pets配列の各要素を一時的に入れる変数

    useItem(petName, itemName) {
        //対象となるペットとアイテムを検索
        const petToAffect = this.findPet(petName);　//例：{name: 'ポチ', type: '犬', hunger: 50, energy: 100}
        const itemToUse = this.items.find(item => item.name === itemName); //例：{id: 1, name: 'ドッグフード', type: 'food', effect: {hunger: 20, energy: 0}}

        //console.error:エラーメッセージをコンソールに赤字で表示(console.logをエラーに特化)
        //エラーハンドリング
        if (!petToAffect) {
        console.error(`エラー: ${petName}は見つかりませんでした。`);
        return;
        }
        if (!itemToUse) {
        console.error(`エラー: ${itemName}は見つかりませんでした。`);
        return;
        }

        // Object.keys()とforEach()を使って効果を適用
        console.log(`\n--- ${petToAffect.name}は${itemToUse.name}を使いました！ ---`);

        //forEach：hungerとenergyを逐次的に処理するために使用
        Object.keys(itemToUse.effect).forEach(key => {
        // 例: keyが'hunger'ならpetToAffect.hungerに効果を適用
        petToAffect[key] += itemToUse.effect[key];
        });


        //Object.keys(itemToUse.effect): itemToUse.effectオブジェクトのプロパティ名（キー）の配列を取得します
        // { hunger: 20, energy: 0 }というオブジェクトなら、
        // ['hunger', 'energy']という配列が返される
        //Object.keys():引数にオブジェクトを取る、返り値はキーの配列



        // 使用後のアイテムをfilter()を使って削除
        this.items = this.items.filter(item => item.name !== itemName);
        console.log(`使用した${itemToUse.name}をアイテムリストから削除しました。`);
        
        


    }

}