/**
 * 제네릭 인터페이스
 */

// 제네릭 인터페이스로 다양한 타입 설정 가능
interface KeyPair<K, V> {
  key: K,
  value: V
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
}

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['1']
}



/**
 * 인덱스 시그니쳐
 */

// 제네릭과 인덱스 시그니쳐를 함께 사용 가능
interface NumberMap {
  [key: string]: number
}

let numberMap1: NumberMap = {
  key: -1231,
  key2: 123123
}

interface Map<V> {
  [key: string]: V
}

let stringMap: Map<string> = {
  key: "value"
}

let booleanMap: Map<boolean> = {
  key: true
}



/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V
}

let stringMap2: Map2<string> = {
  key: "hello"
}



/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
  type: "student"
  school: string
}

interface Developer {
  type: "developer"
  skill: string
}

// 제네릭 타입 변수로 T를 지정한다.
interface User<T> {
  name: string
  profile: T
}


// User<T>에서의 T 변수를 각각 Student와 Developer로 지정해준다.
function goToSchool(user: User<Student>) {
  if (user.profile.type !== 'student') {
    console.log("잘 못 오셨습니다")
    return
  }

  const school = user.profile.school
  console.log(`${school}로 등교 완료`)
}

const developerUser: User<Developer> = {
  name: "한상헌",
  profile: {
    type: "developer",
    skill: "TypeScript"
  }
}

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "상명대학교"
  }
}
