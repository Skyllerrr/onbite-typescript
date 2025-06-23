/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다
 * -> T에서 U를 제거하는 타입
 */

// 결과 : A는 string | boolean에서 boolean 타입을 제거한 "string타입"이 된다.
type A = Exclude<string | boolean, boolean>



/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */

// 결과 : B는 string | boolean에서 boolean 타입을 추출한 "boolean타입"이 된다.
type B = Extract<string | boolean, boolean>



/**
 * ReturnType<T>
 * -> 함수의 반x환값 타입을 추출하는 타입
 */

function funcA() {
  return 'hello'
}

function funcB() {
  return 10
}

// 결과 : funcA에서의 타입을 반환하여 ReturnA의 타입으로 적용시킨다. 따라서, ReturnA의 타입은 string
type ReturnA = ReturnType<typeof funcA>

// 결과 : funcB에서의 타입을 반환하여 ReturnB의 타입으로 적용시킨다. 따라서, ReturnB의 타입은 number
type ReturnB = ReturnType<typeof funcB>
