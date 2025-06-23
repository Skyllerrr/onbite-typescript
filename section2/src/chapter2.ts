// 배열   1. (배열안의 타입을 먼저 작성 후 뒤에 [] 붙이기)
// 배열   2. (배열이라는 것을 먼저 말해주고, 타입 작성하기) - <>은 제네릭 문법이라고 함
let numArr: number[] = [1, 2, 3]

let strArr: string[] = ['hello', 'im', 'winterlood']

let boolArr: Array<boolean> = [true, false, true]


// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, 'hello'] // number이거나 string일 수도 있고, 배열이다 라는 뜻.


// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
] // number타입이고, 다차원 배열읊 표시한다는 뜻


// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2] // 길이가 2, 타입이 number인 튜플 타입
// tup1 = [1, 2, 3]
// tup1 = ['1', '2'] 
// 튜플 타입으로 지정해주면 위 2개의 예시와 같이 길이를 넘어서거나 타입을 변경하면 오류가 생김

let tup2: [number, string, boolean] = [1, '2', true]

const user: [string, number][] = [
  ['한상헌', 1],
  ['이아무개', 2],
  ['김아무개', 3],
  ['박아무개', 4],
  // [5, '최아무개'] // tip: 이런식으로 타입의 순서가 맞지 않을때, 위와 같이
  // 튜플 타입으로 "미리" 설정해두면 오류가 발생한 부분을 빠르게 찾을 수 있음
]

