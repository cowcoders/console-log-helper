export default class DummyClass {
  readonly word: string

  constructor(word: string) {
    this.word = word
  }

  sayHello(): void {
    console.log(`HELLO ${this.word}`)
  }
}
