// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0, // '= 0'을 지워도 0이 됨
  USER = 1, // '= 1'을 지워도 1이 됨
  GUEST = 2, // '= 2'을 지워도 2이 됨
}
// 예시 1) ADMIN = 10이면, 자동으로 USER는 11, GUEST는 12가 됨
// 예시 2) USER = 20이면, 자동으로 GUEST는 21, ADMIN은 그대로 0이 됨


enum Language {
  korean = 'ko',
  english = 'en'
}


const user1 = {
  name: '한상헌',
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean
}

const user2 = {
  name: '홍길동',
  role: Role.USER // 1 <- 일반 유저
}

const user3 = {
  name: '아무개',
  role: Role.GUEST // 2 <- 게스트
}

console.log(user1, user2, user3)
