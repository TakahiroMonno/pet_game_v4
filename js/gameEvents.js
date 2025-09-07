

export const randomEvent = (pet) => {
  const events = [ //配列の要素がオブジェクト（オブジェクトは{}で表現）。各オブジェクトはキーと値のペア（プロパティ）をもつ。
    { name: "病気", hungerChange: -10, energyChange: -20, message: "お腹を壊してしまいました..." },
    { name: "おもちゃ", hungerChange: 0, energyChange: 10, message: "新しいおもちゃを見つけました！" },
    { name: "お腹が空いた", hungerChange: -20, energyChange: 0, message: "お腹が空いて力が出ません..." },
    { name: "昼寝", hungerChange: 0, energyChange: 5, message: "少し昼寝をして回復しました。" }
  ];

  // 1から4までのランダムな整数を生成
  const eventIndex = Math.floor(Math.random() * events.length);
  const selectedEvent = events[eventIndex]; //配列の中からランダムなオブジェクトが選ばれる

  console.log(`\n--- ランダムイベント: ${selectedEvent.name} ---`);
  console.log(selectedEvent.message);

  pet.hunger += selectedEvent.hungerChange;
  pet.energy += selectedEvent.energyChange;

  if (pet.hunger < 0) pet.hunger = 0;
  if (pet.energy < 0) pet.energy = 0;

  pet.getStatus();
};


//各イベントに対する関数を作るのではなく、オブジェクトで変化を辞書形式で整理→一般化した形で反映
//そのへんかをまとめて、一つの関数として表現。新しく関数を作るのは、冗長。


/*
//randomEvent 関数が呼び出されるたびに内部の関数が再定義されるため、非効率
export const randomEvent = (pet) => {

    const events = () => {
        const sick = () => {
            pet.energy -=10; 
            console.log(`${pet.name}は病気になりました。元気度が10減りました。`);
        };
        const toy = () => {
            energy +=10;
            console.log(`${pet.name}は新しいおもちゃで遊びました。元気度が10増えました。`);
        }
        const hungry = () => {
            hunger -=10;
            console.log(`${pet.name}はお腹が空きました。満腹度が10減りました。`);
        }

        const eventList = [sick, toy, hungry];
        const randomIndex = Math.floor(Math.random() * eventList.length);
        eventList[randomIndex]();

        if (pet.hunger < 0) pet.hunger = 0;
        if (pet.energy < 0) pet.energy = 0;

        pet.getStatus();
    }
}
    */

/* 改善例
//イベントリストを定義→その上で、関数を定義。イベントリストは、関数として定義しなくても、処理だけで定義してもいい。ただ可読性が低い
const eventList = [
    (pet) => {
        pet.energy -= 10;
        console.log(`${pet.name}は病気になりました。元気度が10減りました。`);
    },
    (pet) => {
        pet.energy += 10;
        console.log(`${pet.name}は新しいおもちゃで遊びました。元気度が10増えました。`);
    },
    (pet) => {
        pet.hunger -= 10;
        console.log(`${pet.name}はお腹が空きました。満腹度が10減りました。`);
    },
    (pet) => {
        pet.energy += 5;
        console.log(`${pet.name}は少し昼寝をして回復しました。元気度が5増えました。`);
    }
]
　export const randomEvent = (pet) => {
    const randomIndex = Math.floor(Math.random() * eventList.length);
    eventList[randomIndex](pet); //選ばれた関数を実行
    if (pet.hunger < 0) pet.hunger = 0;
    if (pet.energy < 0) pet.energy = 0;
    pet.getStatus();
}   
*/