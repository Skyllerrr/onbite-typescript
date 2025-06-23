/**
 * 함수 타입 표현식
 */

// 함수 타입 표현하는 법 (화살표 함수처럼 생김)
type Operation = (a: number, b: number) => number 

const add: Operation = (a, b) => a + b
const sub: Operation = (a, b) => a - b
const multiply: Operation = (a, b) => a * b
const divide:Operation = (a, b) => a / b



/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

// 중괄호안에 넣는 차이가 있다.
type Operation2 = {
  (a: number, b: number): number
  name: string
}

const add2: Operation2 = (a, b) => a + b
const sub2: Operation2 = (a, b) => a - b
const multiply2: Operation2 = (a, b) => a * b
const divide2: Operation2 = (a, b) => a / b

add2(2, 3)
add2.name
