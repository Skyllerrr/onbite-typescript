/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string
  color: string
}

// extends(상속)로 Animal에 있는 프로퍼티들을 가져옴
interface Dog extends Animal {
  // name: "hello" // 원본 타입(string)의 "서브" 타입이면 변경가능 (ex) 바꾼 타입은 string 리터럴로 string 리터럴은 string의 서브 타입이니까 가능)
  isBark: boolean
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true
}


interface Cat extends Animal {
  isScratch: boolean
}

interface Chicken extends Animal {
  isFly: boolean
}


// Dog, Cat 둘 다 가져오는 예시
interface DogCat extends Dog, Cat {
  
}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true
}
