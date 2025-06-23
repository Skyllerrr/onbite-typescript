/**
 * 타입 변수 응용하기
 */

// 첫 번째 사례
// 아래와 같이 a는 string으로, b는 number 타입으로 설정해주고 싶을 때, 타입 변수를 T와 U처럼 2개를 사용할 수 있다.
function swap<T, U>(a: T, b: U) {
  return [b, a]
}

const [a, b] = swap("1", 2)



// 두 번째 사례
// 배열 같은 경우, 타입 변수 T뒤에 배열을 붙여 사용할 수 있다. (튜플이나 객체도 동일)
// 아래 처럼 새로운 요소가 추가(1)되었을 때, 기존에는 number | string으로 유니온 타입과 섞여서 출력이 된다.
// 첫 요소가 number타입으로 확인하기 위해서는 [T, ...unknown[]]으로 튜플이고, 첫 번째 요소의 타입은 T고 나머지는 배열로 들어올거같은데, 잘 몰라서 unknown일 것 같다 라는 뜻이다.
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0]
}

let num = returnFirstValue([0, 1, 2])
// 0

let str = returnFirstValue([1, "hello", "mynameis"])
// "hello"



// 세 번째 사례
// 타입 변수 T를 지정하되, extends를 이용하여 length가 number 타입의 프로퍼티를 가지고 있는 것은 "제한"하겠다는 뜻이다.
// 즉, length를 가지고 있는 경우에는 제한시키라는 뜻이다.
function getLength<T extends { length: number }>(data: T) {
  return data.length
}

let var1 = getLength([1, 2, 3]) // 3

let var2 = getLength("12345") // 5

let var3 = getLength({ length: 10 }) // 10

// let var4 = getLength(10) // length를 가지고 경우는 제한했기 때문에 오류가 발생 (length가 10임)
