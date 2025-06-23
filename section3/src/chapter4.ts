/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다
 */

/**
 * 1. 합집합 - Union 타입
 */

// 즉, 숫자값과 문자값, 불리언값을 셋 다 넣을 수 있음 (여러개의 타입 가능)
let a: string | number | boolean
a = 1
a = "hello"
a = true

let arr: (number | string | boolean)[] = [1, "hello", true]


// 연습해보기
// type Dog = {
//   name: string
//   color: string
// }

// type Person = {
//   name: string
//   language: string
// }

type Union1 = Dog | Person

// Dog객체의 프로퍼티만
let union1: Union1 = {
  name: "",
  color: ""
}

// Person객체의 프로퍼티만
let union2: Union1 = {
  name: "",
  language: ""
}

// 모든 프로퍼티
let union3: Union1 = {
  name: "",
  color: "",
  language: ""
}

// 공통된 프로퍼티만 (오류가 남)
// color가 없기 때문에 Dog객체에도 포함이 안되고,
// language도 없기 때문에 Person객체에도 포함이 되지 않는다.
// 따라서, Dog와 Person의 집합 과정에서 아무데도 포함되지 않기 때문에
// 오류가 발생한다.
/**
let union4: Union1 = {
  name: ""
}
*/



/**
 * 2. 교집합 타입 - Intersection 타입
 */
let variable: number & string

type Dog = {
  name: string
  color: string
}
  
type Person = {
  name: string
  language: string
}

type Intersection = Dog & Person

// Dog와 Person 객체가 가지고 있는 프로퍼티를 모두 가져오게 된다
// 따라서, 하나의 프로퍼티가 빠져버려도 오류가 발생한다
let intersection: Intersection = {
  name: "",
  color: "",
  language: ""
}
