export class Age {
  constructor(age) {
    this.age = age;
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

}
