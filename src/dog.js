// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `woof, ima ${this.name}`
  }
}

export default Dog
