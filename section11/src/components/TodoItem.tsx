import { useTodoDispatch } from "../App"
import { Todo } from "../types"

// Todo 타입의 내용들을 extends(상속)를 통해 types.ts에서 가져옴
interface Props extends Todo {
  // 기존에는 props로 받아왔지만, 이제는 아래의 dispatch로 받아온다.
  // onClickDelete: (id: number) => void
}

export default function TodoItem(props: Props) {

  const dispatch = useTodoDispatch()

  const onClickButton = () => {
    dispatch.onClickDelete(props.id)
  }

  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClickButton}>삭제</button>
    </div>
  )
}
