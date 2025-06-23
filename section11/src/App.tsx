// React 프로젝트를 TypeScript 프로젝트로 변환시키는 방법
// 1. 타입선언 @types/ 어쩌구 하는 파일들 4개 설치
// 2. tsconfig.json 생성
// 3. 모든 JS 확장자를 JSX로 변환
// 4. 개별 파일들을 하나씩 TSX로 적용

import './App.css';
import React, { useState, useRef, useEffect, useReducer, useContext } from 'react';
import Editor from './components/Editor';
import { Todo } from './types';
import TodoItem from './components/TodoItem';


// Action이라는 이름의 타입 정의를 만들고 아래 reducer함수의 action객체의 타입으로 지정해줌
type Action = {
  type: "CREATE",
  data: {
    id: number
    content: string
  }
} | { type: "DELETE"; id: number}


function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case 'CREATE': {
      return [...state, action.data]
    }
    case 'DELETE': {
        return state.filter((it) => it.id !== action.id)
    }
  }
}

// todos를 공급해주는 State 컨텍스트 객체 생성 및 타입 정의
// 빈 배열만 사용해도 좋지만, null값을 포함한 이유 = 일반적으로 Context에 value가 공급되지 않는 예외적인 상황을 표현하기 위함 (TypeScript의 타입 안정성을 위함)
export const TodoStateContext = React.createContext<Todo[] | null>(null)
// onClickAdd와 onClickDelete를 공급해주는 Dispatch 컨텍스트 객체 생성 및 타입 정의
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void
  onClickDelete: (id: number) => void
} | null>(null)

// useTodoDispatch라는 훅을 만들어서 dispatch가 null일 때와 아닐 때의 "타입 좁히기"를 이용
export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext)
  if (!dispatch) throw new Error("TodoDispatchContext에 문제가 있다")
  return dispatch
}

function App() {
  // TypeScript에서 useState는 초기값이 없으면 자동으로 undefined가 정의되기 때문에 아래처럼 타입을 정해준다. (여기는 string) 
  // const [text, setText] = useState<string>()

  // useState 사용 시
  // const [todos, setTodos] = useState<Todo[]>([])

  // useReducer 사용 시
  const [todos, dispatch] = useReducer(reducer, [])

  // 현재는 모든 요소의 id가 1로 중복되는 값이 들어오기 때문에 이를 방지하기 위해 useRef() 사용
  // 바뀐 후에는 id의 값이 1씩 증가하는 기능으로 가져가려고함 (아래 결과 참고)
  const idRef = useRef(0)


  // 버튼 클릭 이벤트 핸들러와 그에 따른 타입 정의
  const onClickAdd = (text: string) => {
    // useState, setTodos 사용 시
    // setTodos([
    //   ...todos,
    //   {
    //     // id의 값이 1씩 증가
    //     id: idRef.current++,
    //     content: text
    //   }
    // ])

    // useReducer, dispatch 사용 시
    dispatch({
      type: "CREATE",
      data: {
        // id의 값이 1씩 증가
        id: idRef.current++,
        content: text
      }
    })
  }

  // 삭제 함수
  const onClickDelete = (id: number) => {
    // useState, setTodos 사용 시
    // setTodos(todos.filter((todo) => todo.id !== id))

    // useReducer, dispatch 사용 시
    dispatch({
      type: "DELETE",
      id: id
    })
  }

  // todos가 바뀔때마다 todos를 출력
  useEffect(() => {
    console.log(todos)
  }, [todos])
  

  return (
    <div className="App">
      <h1>Todo</h1>

      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <Editor/>
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} {...todo}/>
            ))}
          </div>
          </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    </div>
  );
}

export default App;
