/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
// 아래의 예시에서는 a: number, b: number의 매개변수를 받고, (전체): number의 결과값을 반환한다.
function func(a: number, b: number): number {
  return a + b
}


/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b


/**
 * 함수의 매개변수
 */

// 매개변수에 타입 정의를 직접 해주지않고, 기본값을 넣어도 오류가 생기지 않음(name = "한상헌")
// tall에 '? = 선택적 매개변수'를 지정하면 아래처럼 introduce("한상헌")의 이름만 가져와도 오류가 생기지 않음
// 항상 필수 매개변수 (ex) age: number)는 선택적 매개변수 (ex) tall?: number) '앞'에 존재해야함
function introduce(name = "한상헌", age: number, tall?: number) {
  console.log(`name: ${name}`)
  if (typeof tall === "number") {
    console.log(`tall: ${tall = 10}`)
  }
}

introduce("한상헌", 29, 171)
introduce("한상헌", 29)


// ...rest = rest파라미터로, 출력하는 값이 많을수록 '배열'로 묶어 rest라는 변수에 저장하는 문법
function getSum(...rest: number[]) {
  let sum = 0
  rest.forEach((it) => (sum += it))
  
  return sum
}

getSum(1, 2, 3) // 6
getSum(1, 2, 3, 4, 5) // 15

console.log(getSum(3, 3, 3)) // 예시를 들어 콘솔로 찍어내면 9가 됨
