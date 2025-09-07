// 満腹度と元気度を自動的に減少させる関数
export const autoDecreaseStatus = (pet) => {

    //アロー関数
    const decrease = () => {
        pet.hunger -= 1;
        pet.energy -= 1;

        if (pet.hunger <0) pet.hunger = 0;
        if (pet.energy <0) pet.energy = 0;
        
        console.log(`自動減少: ${pet.name}の満腹度が1減少し、元気度が1減少しました。`);

        pet.getStatus();

    };

    // 3秒ごとにdecease関数を実行
    //JavaScriptに最初から組み込まれている関数、引数に、実行する関数と実行間隔を取る
    setInterval(autoDecreaseStatus, 3000); 
}

//関数を入れ子にするメリット
//もしdecrease関数を外に定義すると、petオブジェクトをsetIntervalに渡す必要があります
//decreaseが操作するのはペットの状態なので、petオブジェクトをdecrease関数のスコープ内に閉じ込めることで、コードの可読性と保守性が向上します


//外部からdecrease関数を直接呼び出せないようにするため
//外部から呼び出せるのはautoDecreaseStatus関数だけにすることで、意図しない使われ方を防ぐことができる
//また、autoDecreaseStatus関数のスコープ内でのみdecrease関数が存在するため、グローバルスコープを汚染しない
//