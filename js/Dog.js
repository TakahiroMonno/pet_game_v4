class Dog extends Pet {
    contructor(name, type) {
        super(name, type); // 親クラスを継承することで、feedやplayなどのメソッドを利用可能にする
    }
    bark(){
        console.log("ワンワン");
    }

}