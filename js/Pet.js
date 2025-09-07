// Petクラスの定義
export class Pet {
  constructor(name, type) {//コンストラクターに渡す引数
    // プロパティを初期化
    this.hunger = 50;
    this.energy = 100;
    this.name = name;// 'name' プロパティを設定
    this.type = type;
  }//これでコンストラクター終わり

  feed() {
    // 満腹度を増やす処理
    this.hunger += 10;
    if(this.hunger > 100){
        this.hunger = 100;
    }
    console.log(`${this.name}はご飯を食べました！満腹度が10増えました。`);
  }

  play() {
    // 元気度を増やし、満腹度を減らす処理
    this.energy += 5;
    this.hunger -= 5;
    console.log(`${this.name}は外で遊びました！元気度が5増え、満腹度が5減りました。`);
  }

  sleep() {
    // 元気度を増やす処理
    this.energy += 10;
    console.log(`${this.name}はぐっすり眠りました。元気度が30増えました。`);
  }

  getStatus() {
    // 現在の状態を出力する処理
    console.log(`${this.name} (${this.type}) - 満腹度: ${this.hunger}, 元気度: ${this.energy}`);
  }
}
