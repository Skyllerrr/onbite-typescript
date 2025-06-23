/**
 * 조건부 타입
 */

// 예시 1
// number는 string타입의 서브타입이냐? 참이면 string 반환, 거짓이면 number 반환
// 답 : number (거짓)
type A = number extends string ? string : number


// 예시 2
// 답 : number (참)
type ObjA = {
  a: number
}

type ObjB = {
  a: number
  b: number
}

type B = ObjB extends ObjA ? number : string



/**
 * 제네릭과 조건부 타입
 */

// T에 number 타입이 들어오게 되면 string(참)이 되고,
// T에 string 타입이 들어오게 되면 number(거짓)이 된다.
type StringNumberSwitch<T> = T extends number ? string : number

// 확인하기
// varA는 string타입 (참)
let varA: StringNumberSwitch<number>

// varB는 number타입 (거짓)
let varB: StringNumberSwitch<string>


// 예시 - (제네릭 조건부를 이용하여 result를 string타입으로 result2를 undefined타입으로 만들어보기)
function removeSpaces<T>(text: T): T extends string ? string : undefined
function removeSpaces(text: any) {
  // 아래의 조건문에서 return값의 오류(타입을 string으로 받질 못함)를 해결하기 위해
  // 위처럼 함수 오버로딩(동일한 코드를 복사 붙여넣는 행동)을 사용하여 text를 모든 타입이 호환되는 any타입으로 설정해준다.
  if (typeof text === 'string') {
    return text.replaceAll(" ", "")
  } else {
    return undefined
  }
}

let result = removeSpaces('hi im winterlood')
result.toUpperCase()

let result2 = removeSpaces(undefined)
