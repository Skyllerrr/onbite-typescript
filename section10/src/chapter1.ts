/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */ 

interface Post {
  title: string
  tags: string[]
  content: string
  thumbnailURL?: string
}

// Partial<Post> = Post타입 안에 있는 모든 프로퍼티를 "선택적 프로퍼티 -> ('?')"로 만들어주는 기능
// 따라서, 아래의 변수로 지정한 Partial<Post>타입에서 해당 프로퍼티가 "없어도" 정상 작동
const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안..."
}



/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

// Required<Post> = Post타입 안에 있는 모든 프로퍼티를 "필수 프로퍼티"로 만들어주는 기능
// 따라서, 아래의 변수로 지정한 Required<Post>타입에서 해당 프로퍼티가 "꼭 있어야만" 정상 작동
const withThumbnailPost: Required<Post> = {
  title: "한입 타스 후기",
  tags: ['ts'],
  content: "",
  thumbnailURL: "https://..."
}



/**
 * Readonly<T>
 * -> 읽기 전용, 수정 불가
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

// Readonly<Post> = Post타입 안에 있는 모든 프로퍼티를 "읽기 전용"로 만들어주는 기능
// 따라서, 아래의 readonlyPost객체의 content프로퍼티의 내용을 다른 내용으로 바꿔주려고 하면 오류 발생
const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글 입니다.",
  tags: [],
  content: ""
}

// readonlyPost.content = "" // 오류 발생(읽기 전용이라서)
