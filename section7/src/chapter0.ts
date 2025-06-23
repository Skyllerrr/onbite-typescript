/**
 * 제네릭
 */

// 제네릭 함수 (제네릭 = 제너럴 = 일반적인 혹은 포괄적인 함수, 모든 타입을 두루두루 사용하는 함수)
// 각 변수에 마우스를 올려서 타입이 정상적으로 담겼는지 확인해보기
function func<T>(value: T): T {
  return value
}

let num = func(10)
// num.toUpperCase()

if (typeof num === "number") {
  num.toFixed()
}

let bool = func(true)

let str = func("string")

// 전에 배웠던 타입 단언을 이용하여 튜플 타입으로 반환
// let arr = func([1, 2, 3] as [number, number, number])
// 제네릭을 이용하여 튜플 타입으로 반환
let arr = func<[number, number, number]>([1, 2, 3])