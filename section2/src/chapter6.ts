// any
// 특정 변수의 타입을 우리가 확실히 모를때

// any는 어느 타입이든지 호환이 되기 때문에, 
// 원래는 anyVar가 number 타입이지만, 
// any를 써줌으로서 'hello'인 string타입도 호환이 되도록 해준다.
// 모든 값을 저장할 수 있다, 반대로도 가능
let anyVar: any = 10
anyVar = 'hello'

// anyVar = true
// anyVar = {}
// anyVar = () => {}

// anyVar.toUpperCase()
// anyVar.toFixed()



// unknown
// any와 같이 어떤 타입이 들어와도 호환이 되는데, 
// 차이점은 모든 값을 저장할 순 있지만, 반대로는 불가능하다.
let num: number = 10
num = anyVar

let unknownVar: unknown

unknownVar = ''
unknownVar = 1
unknownVar = () => { }

// 반대는 불가능
// num = unknownVar

// 기능도 불가능
// unknownVar.toUpperCase()

// typeof를 이용해서 반대 저장으로 사용 가능
if (typeof unknownVar === 'number') {
  num = unknownVar
}
