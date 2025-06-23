/**
 * 사용자 정의 타입가드
 */

type Dog = {
  name: string
  isBark: boolean
}

type Cat = {
  name: string
  isScratch: boolean
}

type Animal = Dog | Cat


// as = 타입 좁히기 사용
// is = 사용자 정의 타입 가드 사용
// 이 함수가 참(true)이면 animal이 Dog타입이구나 라는걸 입력시켜줌
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined
}

function warning(animal: Animal) {
  if (isDog(animal)) {
      // 강아지
      animal
  } else if ("isScratch" in animal) {
      // 고양이
  }
}
