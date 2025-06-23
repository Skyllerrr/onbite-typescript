/**
 * keyof 연산자
 */

// interface Person {
//   name: string
//   age: number
// }

// typeof - 타입을 정의할 때 사용하며, 타입을 뽑아내는 용도로도 사용 가능
// 아래 코드처럼 typeof를 사용하게 되면 person 변수에 저장된 name와 age 프로퍼티를 Person 타입에 저장시켜준다.
// 위의 interface로 지정한 코드와 동일하기 때문에, 이 typeof는 더욱 더 편리하게 코딩이 가능하다.
type Person = typeof person


// keyof - 모든 타입을 유니온 타입으로 추출시켜줌 (여기서는 "name" | "age")
// 새로운 타입이 추가되어도 자동으로 유니온타입으로 추가됨
// 무조건 타입으로만 사용가능 (여기선 타입인 Person은 가능, 변수인 person은 불가능)

// 추가적으로 keyof와 typeof를 중첩사용할 수도 있다. ex) key: keyof typeof Person
// 해석 : typeof person에서 name: string, age: number와 같이 객체 타입을 뽑아오고, 
// 이에 대한 keyof로 객체 타입들의 key값들을 유니온으로 뽑아오는 과정이므로 최종 답은 "name" | "age"가 된다.
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key]
}

const person = {
  name: "한상헌",
  age: 29
}

getPropertyKey(person, "name") // 한상헌



