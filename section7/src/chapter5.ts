import { resolve } from 'path';
/**
 * 프로미스
 */

// response가 number타입으로 전달되기 위해 Promise에 number타입을 지정해준다. (기본값은 unknown타입이라 오류)
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20)
    reject("~때문에 실패")
  }, 3000)
})

promise.then((response) => {
  console.log(response * 10); // 20
})

// 에러 메시지에 타입을 설정하기 위해서는 아래처럼 "타입 좁히기"를 사용한다.
// 프로젝트 형태에 맞게 타입 좁히기를 유용하게 사용한다. (현재는, string값을 때 에러가 뜨게 끔 많듬)
promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err)
  }
})



/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

// 게시글 예시
interface Post {
  id: number
  title: string
  content: string
}

// 3초 뒤에 resolve의 임시 게시글을 반환하는 함수
// fetchPost() 함수에 반환값 타입을 직접 정해준다. (여기서는 Post 타입으로 지정)
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "게시글 컨텐츠"
      })
    }, 3000)
  })
}

const postRequest = fetchPost()

postRequest.then((post) => {
  post.id
})
