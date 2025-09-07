export class PetManager {
    constructor(pets, items) {
        this.pets = pets; //ペットの配列(要素として、各ペットのオブジェクトを持つ)
        this.items = items; //アイテムの配列
    }

    addPet(pet) {
        this.pets.push(pet);

    }
    removePet(petName) {
        this.pets = this.pets.filter((pet) => {this.pets.name !== petName})
    }//petはfilterメソッドが「コールバック関数の第1引数として各配列要素を渡すよ」と約束してくれているので、事前定義は不要
    //pets.nameで、各ペットのnameプロパティにアクセス

    findPet(petName) {
        return this.pets.find((pet) => pet.name === petName); //??? return this.pets.find(petName)
    }

    listAllPets() {
        console.log("=== ペット一覧 ===");
        this.pets.forEach((pet) => pet.getStatus());
    }//petはforEachメソッドが逐次処理を行うために、pets配列の各要素を一時的に入れる変数

    useItem(petName, itemName) {
        const pet = this.findPet(petName)
        const item = this.items.find((itm) => itm.name === itemName);

        this.items.effect = Object.keys(item.effect);
        //item.effectはオブジェクトなので、Object.keys()でキーの配列を取得
        this.items.effect.forEach((effect) => {
            if (effect === 'hunger') {
                pet.hunger += item.effect[effect];
                if (pet.hunger > 100) pet.hunger = 100;
                console.log(`${pet.name}の満腹度が${item.effect[effect]}増えました。`);
            } else if (effect === 'energy') {
                pet.energy += item.effect[effect];
                if (pet.energy > 100) pet.energy = 100;
                console.log(`${pet.name}の元気度が${item.effect[effect]}増えました。`);
            }
        });
        this.items.filter((itm) => itm.name !== itemName);
        //使用したアイテムをアイテムリストから削除  


    }

}