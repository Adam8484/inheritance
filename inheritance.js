function BaseClass(value) {
  this.value = value;
}

BaseClass.prototype.get = function () {
  return this.value;
};

BaseClass.prototype.random = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};

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

function StringBuilder(value) {
  BaseClass.call(this, value);
}

StringBuilder.prototype = Object.create(BaseClass.prototype);

StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.plus = function (...n) {
  this.value = [this.value, ...n].join("");
  return this;
};

StringBuilder.prototype.minus = function (n) {
  this.value = this.value.slice(0, -n);
  return this;
};

StringBuilder.prototype.multiply = function (n) {
  this.value = this.value.repeat(n);
  return this;
};
StringBuilder.prototype.divide = function (n) {
  const k = Math.floor(this.value.length / n);
  this.value = this.value.substr(1, k);
  return this;
};

StringBuilder.prototype.remove = function (n) {
  this.value = this.value.split(n).join("");
  return this;
};
StringBuilder.prototype.sub = function (from, n) {
  this.value = this.value.substr(from + 1, n);
  return this;
};
