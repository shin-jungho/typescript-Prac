enum GenderType {
  Male = 'male',
  Female = 'female',
  genderNeutral = 'genderNeutral'
}
interface Student {
  readonly studentID: number,
  studentName: string,
  age?: number,
  gender: 'male' | 'female' | 'genderNeutral', // auto complete 가능하게 해줌
  subject: string,
  courseCompleted: boolean,
  // addComment (comment: string): string;
  addComment?: (comment: string) => string
}

let student1 = {
  studentID: 123123,
  studentName: 'jackson',
  age: 30,
  gender: 'female',
  subject: 'MongoDB',
  courseCompleted: false
}

function getStudentDetails(studentID: number): Student
{
  return {
    studentID: 12345,
    studentName: 'shin',
    age: 21,
    gender: 'male',
    subject: 'javascript',
    courseCompleted: false
  };
}

function saveStudentDetails (student: Student): void {
  // student.studentID= 11222;  읽기 전용이라 프로퍼티 읽히지 않는다.
}

saveStudentDetails(student1);