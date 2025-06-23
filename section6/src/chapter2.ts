/**
 * 접근 제어자
 * access modifier
 * => public private proteced
 */

// public : 기본값 (아무것도 없어도 public)
// private : 해당 프로퍼티를 클래스 내부에서 사용해야 함 
// (파생 클래스에도 접근 안됨, 무조건 해당 프로퍼티가 선언된 클래스(Employee)에서만 사용 가능)
// (예를 들어서 chapter1.ts의 ExecutiveOfficer클래스)
// protected : private에서 안되는 파생 클래스 안에서도 사용 가능
class Employee {
  // 필드
  // public name: string
  // private name: string
  // protected name: string
  name : string
  public age: number
  public position: string

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name
    this.age = age
    this.position = position
  }

  // 매서드
  work() {
    console.log("일함")
  }
}

const employee = new Employee("한상헌", 29, "developer")
employee.name = "홍길동"
employee.age = 30
employee.position = "디자이너"

console.log(employee)
