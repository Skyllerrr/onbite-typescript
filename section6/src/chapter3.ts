/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string
  moveSpeed: number
  move(): void
}

class Character implements CharacterInterface {
  //name: string
  //moveSpeed: number

  // 생성자
  constructor(public name: string, public moveSpeed: number, private extra: string) {
    //this.name = name
    //this.moveSpeed = moveSpeed
  }

  // 메서드
  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`)
  }
}
