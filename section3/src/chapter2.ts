// 타입스크립트 mdn의 "타입 호환 표" 아니면, 강의의 "타입 계층도" 자료를 다운받고 같이 확인해보면서 공부하기!!!!! //
// 보기 편한 자료를 보면서 공부하기 (업캐스팅과 다운캐스팅을 구분) //

/**
 * Unknown 타입
 */

function unknownExam() {
  // 최상위의 unknown은 나머지 하위의 타입들이 들어갈 수 있음
  let a: unknown = 1
  let b: unknown = 'hello'
  let c: unknown = true
  let d: unknown = null
  let e: unknown = undefined

  let unknownVar: unknown;

  // 오류가 뜸 (최상위의 unknown타입을 하위의 number, string, boolean타입을 우선으로 넣으려고 하니까 오류가 뜸, 반대는 가능)
  // let num: number = unknownVar
  // let str: string = unknownVar
  // let bool: boolean = unknownVar
}


/**
 * Never 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc()
  let str: string = neverFunc()
  let bool: boolean = neverFunc()

  // never타입이 더 하위인데 이에 더 상위인 number, string, boolean타입은 대입하기 힘듦
  // let never1: never = 10
  // let never2: never = 'string'
  // let never3: never = true
}


/**
 * Void 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log('hi')
  }

  // undefined타입은 void타입보다 더 하위이기 때문에 가능
  let voidVar: void = undefined
}


/**
 * any 타입
 */

// any타입은 말 그대로 "치트키"라는 속성을 가지고 있어서, 모든 타입의 상위가 될 수도 있고 하위가 될 수도 있다.
function anyExam() {
  let unknownVar: unknown
  let anyVar: any
  let undefinedVar: undefined
  let neverVar: never

  // 따라서, 원래는 오류가 발생하는데 타입의 계층도를 무시하는 "치트키"로서,
  // anyVar 자기자신이 다운캐스팅이 되는 것도 가능하고, anyVar 자기자신이 직접 다운캐스팅 하는 것도 가능하기 때문에 오류가 안뜸
  anyVar = unknownVar
  undefinedVar = anyVar


  // 유일하게 한가지 오류가 발생할 수 있는데,
  // never타입은 유일한 "공집합"이기 때문에 그 어떠한 타입도 다운캐스팅이 불가능해서 유일하게 오류가 발생한다
  // neverVar = anyVar
}
