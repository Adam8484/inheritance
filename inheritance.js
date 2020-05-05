class BaseClass {
  constructor(value) {
    this.value = value;
  }
  plus(...n) {
    throw new Error("missing implementation");
  }
  get() {
    return this.value;
  }

  minus() {
    throw new Error("missing implementation");
  }

  multiply() {
    throw new Error("missing implementation");
  }
  divide() {
    throw new Error("missing implementation");
  }
  mod() {
    throw new Error("missing implementation");
  }

  random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
}

class IntBuilder extends BaseClass {
  constructor(value) {
    super(value);
    if (typeof value !== "number") {
      this.value = 0;
    } else this.value = value;
  }

  plus(...n) {
    this.value += n.reduce((a, b) => a + b, 0);
    return this;
  }
  minus(...n) {
    this.value -= n.reduce((a, b) => a + b, 0);
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }
  divide(n) {
    this.value /= n;
    return this;
  }
  mod(n) {
    this.value %= n;
    return this;
  }
}
