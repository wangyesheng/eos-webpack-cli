class Aniaml {
  constructor(type) {
    this.type = type;
  }
  say() {
    console.log(this.type);
  }
}

const dogger = new Aniaml("dog");
dogger.say();
