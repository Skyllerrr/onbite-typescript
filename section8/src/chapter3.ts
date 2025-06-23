/**
 * 맵드 타입
 */

interface User {
  id: number
  name: string
  age: number
}

// 맵드 타입은 interface에서는 쓸수 없고, 타입 별칭(type)에만 사용 가능하다.
// 활용도가 높고, 실무에서도 자주 쓰임
// 맵드 타입의 문법 [key in '객체의 프로터티의 키값들을 유니온으로 설정'] : value값
// 해석 => id: User["id"], name: User["name"], age: User["age"]로 해석할 수 있으며, 이는 각각 number, string, number타입이므로
// 결론은 id는 number, name은 string, age는 number인 객체 타입이 되는 것이다.

// '?'를 붙이면, 맵드 타입으로 설정된 모든 타입의 프로퍼티가 선택적 프로퍼티가 된다. (마우스로 대보기)
type PartialUser = {
  [key in 'id' | 'name' | 'age']? : User[key]
}

// 여기서! chapter2.ts에서 배웠던 keyof를 섞여서 유용하게 사용할 수 있다.
// keyof는 모든 타입을 유니온으로 변경시키기 때문에 여기서 keyof를 사용하면 위의 직접적으로 유니온 타입을 설정한 결과와 동일하다고 볼 수 있다.
// [이름이 겹쳐서 오류나기 때문에 임의로 주석처리 했음]
// type PartialUser = {
//   [key in keyof User]? : User[key]
// }


// 연습 : 모든 타입을 boolean으로 바꾸는 맵드 타입을 만들어보기 (마우스로 대보기)
type BooleanUser = {
  [key in 'id' | 'name' | 'age']: boolean
}


// 맵드 타입에서도 readonly를 붙여 모든 프로퍼티를 readonly(읽기 전용)로 바꿀 수도 있다.
type ReadonlyUser = {
  readonly [key in keyof User]: User[key]
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능
  return {
    id: 1,
    name: "한상헌",
    age: 29
  }
}

// 모든 타입을 readyonly로 지정하고, 함수의 타입을 ReadonlyUser로 지정해준 다음
// 마지막에 예를 들어 user의 id값을 2로 바꾸려고 해도, readonly 속성때문에 변경이 불가능한 오류가 발생한다.
// const user = fetchUser()
// user.id = 2



// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  id: 1,
  name: "한상헌",
  age: 29
})
