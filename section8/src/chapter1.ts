/**
 * 인덱스드 엑세스 타입
 */

// 1. 객체에 사용
interface Post {
  title: string
  content: string
  author: {
    id: number
    name: string
    age: number
  }
}

// const key = "author"

// 타입이 추가되거나 삭제되면, 그에 맞게 타입 수가 원하는 대로 변화한다.
// 전체 타입의 이름과 가져올 타입의 이름을 적는다. author: Post["author"]
// 여기서 author은 "값"(변수)이 아니라 "타입"임을 꼭 기억하자!
// 예를 들어, 5번째줄 위의 주석처리된 const key = "author"의 author은 타입이 아니라 값이기 때문에 이를 가져오면 오류가 발생한다.

// 또한, author: Post["author"]['id'] 이런식으로 중첩으로 가져올 수 도있어서 여기서의 author타입은 id의 타입인 number가 된다. (마우스 대보기)
function printAuthorInfo(author: Post['author']) {
  console.log(`${author.name}-${author.id}`)
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 목록",
  author: {
    id: 1,
    name: "한상헌",
    age: 29
  }
}

printAuthorInfo(post.author)
// 결과값은 모두 동일 => 한상헌-1



// 2. 배열에 사용
type PostList = {
  title: string
  content: string
  author: {
    id: number
    name: string
    age: number
  }
}[]

// author: PostList[number]['author'] 처럼 요소의 타입을 먼저 뽑고, 객체 타입의 요소를 뽑아온다
// 객체와 순서가 반대! 
// 객체에 사용 - (전체 객체 타입의 요소 뽑기, 뽑은 타입안의 세부 요소를 뽑기)
// 배열에 사용 - (뽑은 타입안의 세부 요소를 뽑기, 전체 객체 타입의 요소 뽑기)
function printAuthorInfoList(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`)
}

// PostList[0]을 해도 타입 결과는 똑같음 (마우스 대보기)
const postList: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 목록",
  author: {
    id: 1,
    name: "한상헌",
    age: 29
  }
}

printAuthorInfoList(post.author)
// 결과값은 모두 동일 => 한상헌-1



// 3. 튜플에 사용
// 해당 넘버 위치에 따라서 각각 뽑아올 수 있다.
type Tup = [number, string, boolean]

type Tup0 = Tup[0]

type Tup1 = Tup[1]

type Tup2 = Tup[2]

// 존재하지 않는 넘버 위치를 출력하게 되면 오류 발생
//type Tup3 = Tup[3]

// 튜플 타입의 최적의 공통 타입을 뽑아줌 (여기선 세 타입의 유니온으로 뽑아줌)
type TupNum = Tup[number]
