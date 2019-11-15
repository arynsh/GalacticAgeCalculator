export class Age {
  constructor(age, lifeexp) {
    this.age = age;
    this.lifeexp = lifeexp;
  }

  ageOnMercury() {
    return this.age / 0.24;
  }

  ageOnVenus() {
    return this.age / 0.62;
  }

  ageOnMars() {
    return this.age / 1.88;
  }

  ageOnJupiter() {
    return this.age / 11.86;
  }

  lifeExpMercury() {
    return (this.lifeexp - this.age) / 0.24;
  }

  lifeExpVenus() {
    return (this.lifeexp - this.age) / 0.62;
  }

}
