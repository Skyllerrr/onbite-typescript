/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number

// 조건부 결과 - string (참)
let a: StringNumberSwitch<number>

// 조건부 결과 - number (거짓)
let b: StringNumberSwitch<string>

// 조건부 결과 - string | number
let c: StringNumberSwitch<number | string>
// StringNumberSwitch<number> | StringNumberSwitch<string> => string | number


// 조건부 결과 - string | number
let d: StringNumberSwitch<boolean | number | string>
// 1단계
// StringNumberSwitch<boolean> | StringNumberSwitch<number> | StringNumberSwitch<string>

// 2단계
// number | string | number

// 최종 결과 (number가 중복이니까 하나를 빼줌)
// number | string 도 가능하고, string | number도 가능하다.





/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T

type A = Exclude<number | string | boolean, string>
// 1단계
// Exclude<number, string> | Exclude<string, string> | Exclude<boolean, string>

// 2단계
// number | never | boolean

// 최종 결과 (유니온 타입에 never가 있으면 사라짐)
// number | boolean


type Extract<T, U> = T extends U ? T : never

type B = Extract<number | string | boolean, string>
// 1단계
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

// 2단계
// never | string | never

// 최종 결과 (유니온 타입에 never가 있으면 사라짐)
// string
