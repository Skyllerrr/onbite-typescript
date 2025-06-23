/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

interface Post {
  title: string
  tags: string[]
  content: string
  thumbnailURL?: string
}

// Pick<T, K> = Post타입으로부터 title프로퍼티와 content프로퍼티만 가져와서 새롭게 정의해주는 기능
// 아래 변수에 지정한 타입의 프로퍼티중 해당하지 않는 타입들을 넣으면 당연히 오류 발생 ('tags', 'thumbnailURL', 'number' 등등)
const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: "옛날 글",
  content: "옛날 컨텐츠"
}



/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

// Post타입으로부터 title프로퍼티만 제거하는 기능
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: ""
}



/**
 * Record<K, V>
 */

type ThumbnailLegacy = {
  large: {
    url: string
  }
  medium: {
    url: string
  }
  small: {
    url: string
  }
  watch: {
    url: string
  }
}

// Record<K, V>는 객체 타입을 만들어주는 유틸리티 타입으로서, 위 처럼 중복 코드가 많아지면 아래처럼 Record를 사용하여 간단하게 만들 수 있음 
type Thumbnail = Record<'large' | 'medium' | 'small', { url: string }>
