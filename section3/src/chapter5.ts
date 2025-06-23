/**
 * 타입 추론
 */

let a = 10
let b = "hello"
let c = {
  id: 1,
  name: "한상헌",
  profile: {
    nickname: "skyler"
  },
  urls: ["https://www.naver.com"]
}

let { id, name, profile } = c

let [one, two, three] = [1, "hello", true]


// 함수의 타입은 초기화하는 값이 아닌, 
// return문의 반환값으로 타입을 결정한다.
// 즉, 여기선 "hello"가 string이므로
// 함수 func()의 타입은 string이 된다
function func() {
  return "hello"
}

// 기본값이 존재하는 경우에도 기본값을 따라 타입 결정
// 여기서의 기본값은 message 즉, "hello"인 string으로
// 함수 funcs()의 타입은 string이 된다.
function funcs(message = "hello") {
  return "hello"
}


// 변수를 선언하고 초기값을 지정하지 않으면,
// 암묵적으로 any 타입이 결정이 됨
// 하지만, 그 아래에 사용자가 원하는 타입을
// 초기값으로 지정해주면 해당하는 타입으로 변경된다.
let d;
d = 10
d.toFixed() // number타입이니까 toFixed() 사용 가능

d = "hello"
d.toUpperCase() // string타입이니까 toUpperCase() 사용 가능



// number
const num = 10

// string
const str = "hello"

// arr: (string | number)
let arr = [1, "string"]
