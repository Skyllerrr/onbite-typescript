// 객체 (리터럴 문법을 사용하여 안에 프로퍼티에 대한 타입을 하나씩 직접 지정해준다.)
let user = {
    id: 1,
    name: '한상헌'
};
let dog = {
    name: '돌돌이',
    color: 'brown'
};
// 맨 위의 user 객체에서 id의 프로퍼티 값이 있어도 되고, 없어도 된다는 뜻의 '?'를
// 붙였으므로 아래처럼 없는 경우에도 오류가 생기지 않는다. 
// (대신 있으면 무조건 number타입이기에 예를 들어, id: '1'은 오류가 된다.)
user = {
    name: '홍길동'
};
// 객체 (readonly)
let config = {
    apiKey: 'MY API KEY'
};
export {};
// config.apiKey = 'hacked'
// 이처럼 절대 바꾸면 안되는 프로퍼티가 있다면, 
// readonly 속성을 사용하여 바꿀 수 없도록 정의해준다.
