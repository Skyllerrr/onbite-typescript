/**
 * 타입 단언
 */

type Person = {
  name: string
  age: number
}

// as 없이 Person타입을 그대로 가져오면 오류가 뜨기 때문에,
// as 라는 키워드로 단언 (Person을 강조하는 뜻)
let person = {} as Person
person.name = "한상헌"
person.age = 29


type Dog = {
  name: string
  color: string
}

// 원래는 "초과 프로퍼티 타입"이 발동되어
// 기존에 존재하지 않던 breed에 오류가 뜨는데,
// as를 이용하여 Dog 타입을 강조시키면 오류가 사라짐
let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도"
} as Dog


/**
 * 타입 단언의 사용 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

// ex)
// 10은 number타입이고 never는 모든 타입의 서브타입이다.
// 따라서, 예시의 A인 10은 B인 never의 슈퍼타입이기 때문에
// 타입 단언은 as를 사용할 수 있는 것이다.
let num1 = 10 as never

// unknown도 모든 타입의 슈퍼타입
// 따라서, 예시의 A인 10은 B인 unknown의 서브타입이기 때문에 사용 가능
let num2 = 10 as unknown

// number와 string은 교집합 관계가 이루어지지 않아서
// 서로의 슈퍼타입도 서브타입 관계도 아니기 때문에
// 타입 단언 as를 사용할 수 없는 오류가 발생한다.
// let num3 = 10 as string



/**
 * const 단언
 */

// 변수 선언을 const로 선언한 것 처럼 만듦
// 즉, 여기선 let을 const로 선언한 것 처럼 만듦
let num4 = 10 as const

// 기존에는 객체 리터럴 형식으로 기본적인 타입 설정이 되는데,
// as const를 사용하여 타입 단언을 해주면,
// readonly 속성이 적용되어
// 아래의 cat.name = ''과 같이 프로퍼티의 값을 수정할 수 없는
// 읽기 전용으로 변경된다.
let cat = {
  name: "야옹이",
  color: "yellow"
} as const

// 수정할 수 없는 readonly 속성이 존재하여 
// 프로퍼티를 수정하려고 하면 오류가 발생
// cat.name = ''



/**
 * Non Null 단언
 */

// author 프로퍼티가 없을 수도 있다고 가정
type Post = {
  title: string
  author?: string
} 

let post: Post = {
  title: "게시글1",
  author: "한상헌"
}

// ?연산자는 undefined이 될 수도 있어 라는 뜻이 포함되어 있기 때문에
// number타입 연산자에 맞지않아 오류가 발생하게 된다.
// const len: number = post.author?.length

// !연산자는 null이거나 undefined를 포함하지 않는다는 내용을 포함하기 때문에
// 해당 예시는 길이 즉, string일 것이라고 믿기 때문에 오류가 발생하지 않는다.
const len: number = post.author!.length
