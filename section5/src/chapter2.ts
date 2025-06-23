/**
 * 선언 합침
 */

interface Person {
  name: string
}

interface Person {
  name: string
  age: number
}

// 선언 합침에서는 합치기 위한 두 인터페이스의 매개변수의 타입을 "동일"(name: string)하게 지정해야만 정상적으로 작동한다.
interface Developer extends Person {
  name: "hello"
}

const person: Person = {
  name: "",
  age: 29
}


/**
 * 모듈 보강
 */

interface Lib {
  a: number
  b: number
}

interface Lib {
  c: string
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello'
}
