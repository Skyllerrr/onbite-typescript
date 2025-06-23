/**
 * infer
 */

type FuncA = () => string

type FuncB = () => number

// 기존
// type ReturnType<T> = T extends () => string ? string : never
// infer
// infer R은 기존의 타입 변수 T나 U처럼 생각하면 되고,
// infer - 조건식을 참으로 만드는 추론을 하도록 동작 (참으로 만들도록 사용)
type ReturnType<T> = T extends () => infer R ? R : never


// 기존 결과 - ()안의 매개변수는 서로 없고, 반환값은 string으로 똑같기 때문에 결국, 답은 string(참)이 된다.
// infer 결과 - () => string과 infer R이 서로 '참'이 되도록 만들어야 하기 때문에 R은 string이 되고 결국, 답은 string(R)이 된다.
type A = ReturnType<FuncA>

// 기존 결과 - ()안의 매개변수는 서로 없고, 반환값은 number와 string으로 서로가 교집합이 아닌 서로소로 서브와 슈퍼타입이 아니기 때문에, 답은 never(거짓)가 된다.
// infer 결과 - () => number과 infer R이 서로 '참'이 되도록 만들어야 하기 때문에 R은 number가 되고 결국, 답은 number(R)가 된다.
type B = ReturnType<FuncB>


//*** infer 예시의 예외 상황 ***//
// number가 () => infer R의 서브 타입이 될 수 있도록 R을 지정하려면, 해결 자체가 불가능하다. (치트키인 any도 불가능)
// 이런 경우는 "추론이 불가능"하다는 결과로 거짓임을 판단하기 때문에 답은 never(거짓)가 된다.
type C = ReturnType<number>





/**
 * 좀 더 쉬운 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
// 3. 

type PromiseA = PromiseUnpack<Promise<number>>
// number가 되기를 바람
// 과정 해석 - Promise<number>타입이 Promise<infer R>타입의 서브 타입이 되는 R 타입을 추론하라 하고 한 뜻이다.
// 따라서, R은 number타입이 되고, 결과는 참인 number(R)이 된다.

type PromiseB = PromiseUnpack<Promise<string>>
// string이 되기를 바람
// 과정 해석 - Promise<string>타입이 Promise<infer R>타입의 서브 타입이 되는 R 타입을 추론하라 하고 한 뜻이다.
// 따라서, R은 string타입이 되고, 결과는 참인 string(R)이 된다.
