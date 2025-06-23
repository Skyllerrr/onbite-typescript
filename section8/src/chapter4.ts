/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green'

type Animal = 'dog' | 'cat' | 'chicken'

// Color로 올 수 있는 모든 유니온 타입들과 Animal로 올 수 있는 모든 유니온 타입들로 조합할 수 있는 모든 경우의 수를 저장해줌
type ColoredAnimal = `${Color}-${Animal}`
