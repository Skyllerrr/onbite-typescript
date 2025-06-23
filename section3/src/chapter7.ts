/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string
  age: number
}


// value => number이라면 toFixed
// value => sting이라면 toUpperCase
// value => Date이라면 getTime
// value => Person : name은 age살 입니다.

// 첫 번째 조건문은 value가 number타입일 수 밖에 없는 조건이기 때문에
// 타입 좁히기를 통해 toFixed() 속성을 사용할 수 있도록 만든다.
// 두 번째 조건문은 value가 string타입일 수 밖에 없는 조건이기 때문에
// 타입 좁히기를 통해 toUpperCase() 속성을 사용할 수 있도록 만든다.
// 세 번째 조건문은 value가 null타입으로도 발생할 수 있기 때문에
// 새로운 타입 속성인 instanceof를 사용하여 오류를 해결한다.

// instanceof를 사용함에 있어서 instanceof는 앞의 값이 뒤의 내용의 클래스의 인스턴스인지 확인하는 속성인데,
// Date는 인스턴스의 내장 "클래스"이기 때문에 사용이 가능하지만(오류가 발생하지 않지만)
// Person "타입"은 클래스가 아니니까 객체 타입이기 때문에 오류가 발생한다.

// 따라서, value가 있을 때만 "age"가 value안에 존재하냐라는 의미로 작성해야한다.
function func(value: number | string | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed())
  }
  else if (typeof value === "string") {
    console.log(value.toUpperCase())
  }
  else if (value instanceof Date) {
    console.log(value.getTime())
  }
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`)
  }
}
