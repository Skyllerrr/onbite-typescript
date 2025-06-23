/**
 * 인터페이스
 */

interface Person {
  readonly name: string
  age?: number
  sayHi(): void // 호출 시그니쳐
  sayHi(a: number, b: number): void // 호출 시그니쳐
}

const person: Person = {
  name: "한상헌",
  sayHi: function () {
    console.log('Hi')
  }
}

// person.name = "한상헌" // 현재 name 프로퍼티는 "읽기 전용"이라서 오류가 생김

person.sayHi()
person.sayHi(1, 2)
