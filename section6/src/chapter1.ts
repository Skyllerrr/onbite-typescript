/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "한상헌",
  age: 29,
  position: "developer",
  work() {
    console.log('일함')
  }
}

class Employee {
  // 필드
  name: string
  age: number
  position: string

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

// 새로운 ExecutiveOfficer라는 이름의 클래스 추가 및 Employee 클래스 상속
class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number
  
  // 생성자
  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position)
    this.officeNumber = officeNumber
  }
}

const employeeB = new Employee("한상헌", 29, "개발자")
console.log(employeeB)



// TypeScript의 클래스는 타입 형태로도 사용 가능
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {}
}
