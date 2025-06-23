// 타입 별칭
// 이런식으로 User라는 이름으로 타입을 객체 형식으로 정의한다음,
// 타입을 간단하게 지정할 수 있다.
type User = {
  id: number
  name: string
  nickname: string
  birth: string
  bio: string
  location: string
}

let user: User = {
  id: 1,
  name: '한상헌',
  nickname: 'skyler',
  birth: '1997.01.07',
  bio: '안녕하세요',
  location: '안양시'
}


// 인덱스 시그니처
// key와 value의 타입을 이용해서 규칙을 통해 타입을 간편하게 지정하는 방법이다.
// 방법은 대괄호 안에 key의 타입을 넣고, 대괗로 바깥에 바로 value의 타입 값을 넣는다.
// 현재 예시에서는 key값은 나라를 나타내는 string, value값은 나라의 약자를 나타내는 string
type CountryCodes = {
  [key : string] : string
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk'
}


// 예시2
type countryNumberCodes = {
  [key: string]: number
}

let countryNumberCodes: countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826
}
