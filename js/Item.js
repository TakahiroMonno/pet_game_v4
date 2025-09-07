
export class Item {
    constructor(id, name, type, effect) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.effect = effect; //この時点では、プロパティをどのように定義するかは関係ない（プロパティをオブジェクトにしたい場合は、その時に）
    }
}