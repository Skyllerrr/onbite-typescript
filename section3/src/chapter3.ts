/**
 * 기본 타입간의 호환성
 */

let num1: number = 10
let num2: 10 = 10

// number타입이 리터럴 타입보다 슈퍼타입이기 때문에 업캐스팅이 가능
num1 = num2



/**
 *  객체 타입간의 호환성
 */

type Animal = {
  name: string
  color: string
}

type Dog = {
  name: string
  color: string
  breed: string
}

let animal: Animal = {
  name: "기린",
  color: "yellow"
}

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도"
}

// animal타입은 dog타입의 슈퍼타입, dog타입은 animal타입의 서브타입
// animal = dog (정상)
// dog = animal (오류)

// 객체 타입에서는 추가 프로퍼티가 없는 즉, 조건이 더 적은 타입이 슈퍼타입이 된다.
// animal(슈퍼타입) - 프로퍼티 (이름, 색깔 - 2개)
// dog(서브타입) - 프로퍼티 (이름, 색깔, 색도 - 3개)


// 객체 타입 호환성 연습
type Book = {
  name: string
  price: number
}

type ProgrammingBook = {
  name: string
  price: number
  skill: string
}

let book: Book
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reatjs"
}

// 따라서 여기서는, Book이 슈퍼타입이고 ProgrammingBook이 서브타입이다.
// book = programmingBook (정상)
// programmingBook = book (오류)



/**
 * 초과 프로퍼티 검사
 */

// 아래의 예시와 같이 객체 리터럴에
// 실제 타입에 정의되지 않는 새로운 프로퍼티를 넣게되면 
// "초과 프로퍼티 검사라는 이유"로 자동으로 막아준다 (오류가 발생된다)

let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reatjs"
}

// 해결 방법 1
// 객체 리터럴을 직접 사용하지 않고, 리터럴의 이름만 따오기 
let book3: Book = programmingBook

// 해결 방법 2
// 변수에 저장해 두었다가 인수로 나타내기
function func(book: Book) { }
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reatjs"
})
func(programmingBook)
