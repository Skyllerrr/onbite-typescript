/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */

// 버전들 => 오버로드 시그니쳐
function func(a: number): void
function func(a: number, b: number, c: number): void

// 실제 구현부 => 구현 시그니쳐
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log (a + b + c)
  } else {
    console.log(a * 20)
  }
}

// 오버로드 시그니쳐의 2개의 버전(a의 number 타입 1개, a, b, c의 number 타입 3개)중에 한가지에만 따라가기 때문에
// func(1), func(1, 2, 3)은 정상, func(), func(1, 2)는 오류가 발생한다.
// func()
// func(1)
// func(1, 2)
// func(1, 2, 3)
