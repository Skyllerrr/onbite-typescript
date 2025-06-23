import { ReactElement, useState } from "react"
import { TodoDispatchContext, useTodoDispatch } from "../App"

interface Props {
  // 기존에는 props로 받아왔지만, 이제는 아래의 dispatch로 받아온다.
  // onClickAdd: (text: string) => void
}

// props에도 위처럼 타입을 별도로 지정해줘야함
export default function Editor(props: Props) {

  // 타입 좁히기를 진행한 dispatch의 useTodoDispatch() 훅을 불러옴
  const dispatch = useTodoDispatch()

  const [text, setText] = useState("")

  // input 이벤트 핸들러와 그에 따른 타입 정의
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    // 지금 현재 dispatch가 null값이 될 수 있다고 App.tsx에 타입 정의를 해놓았기 때문에 '?'를 붙인 옵셔널 체이닝을 활용한다.
    // dispatch?.onClickAdd(text)

    // 수정 후, 현재는 App.tsx에서 dispatch를 타입 좁히기로 조건문을 걸어 나눠줬기 때문에 굳이 '?'를 붙이지 않아도 된다.
    dispatch.onClickAdd(text)
    setText("")
  }

  return (
  <div>
    <input value={text} onChange={onChangeInput} />
    <button onClick={onClickButton}>추가</button>
    </div>
  )
}
