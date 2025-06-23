/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 내용
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가 (업캐스팅은 호환, 다운캐스팅은 호환 안됨)
type A = () => number
type B = () => 10

let a: A = () => 10 // number 타입 (슈퍼 타입)
let b: B = () => 10 // number 리터럴 타입

// a = b // 정상 (업캐스팅)
// b = a // 오류 (다운캐스팅)



// 기준 2. 매개변수가 호환되는가 (업캐스팅은 호환 안되고, 다운캐스팅은 호환 - 반환값 기준과 반대)
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void
type D = (value: 10) => void

let c: C = (value) => {}
let d: D = (value) => {}

// c = d // 오류 (업캐스팅)
// d = c // 정상 (다운캐스팅)


// Animal 타입이 슈퍼타입
type Animal = {
  name: string
}

type Dog = {
  name: string
  color: string
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name)
}
let dogFunc = (dog: Dog) => {
  console.log(dog.name)
  console.log(dog.color)
}

// animalFunc = dogFunc // animalFunc가 슈퍼타입이면서 해당 내용은 업캐스팅인데도 오류가 발생
// dogFunc = animalFunc // 정상 (다운캐스팅)

// 오류 설명 예시
// 아래의 콘솔로 찍은 animal.color는 할당하려는 함수(Animal)에 해당하는 매개변수(color)가 없기 때문에 오류가 발생한다. [매개변수이기 때문]
// 따라서 슈퍼 타입에 업캐스팅되는 과정이 오류가 발생
let testFunc = (animal: Animal) => {
  console.log(animal.name)
  // console.log(animal.color)
}

let testFunc2 = (dog: Dog) => {
  console.log(dog.name)
}


// 2-2. 매개변수의 개수가 다를 때 (할당하려는 함수의 매개변수 개수가 더 적어야 정상적으로 호환이 됨)

type Func1 = (a: number, b: number) => void
type Func2 = (a: number) => void

let func1: Func1 = (a, b) => {}
let func2: Func2 = (a) => {}

// func1 = func2 // 정상 (func1의 매개변수 개수가 더 많기 때문에 가능)
// func2 = func1 // 오류 (func2의 매개변수 개수가 더 적기 때문에 불가능)
