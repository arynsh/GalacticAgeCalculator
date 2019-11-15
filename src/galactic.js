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

  lifeExpMars() {
    return (this.lifeexp - this.age) / 1.88;
  }

  lifeExpJupiter() {
    return (this.lifeexp - this.age) / 11.86;
  }

  lifeExpMercurySurpass() {
    return (this.age - this.lifeexp) / 0.24;
  }

  lifeExpVenusSurpass() {
    return (this.age - this.lifeexp) / 0.62;
  }

  lifeExpMarsSurpass() {
    return (this.age - this.lifeexp) / 1.88;
  }

  lifeExpJupiterSurpass() {
    return (this.age - this.lifeexp) / 11.86;
  }

}
