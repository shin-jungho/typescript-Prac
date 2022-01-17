var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["genderNeutral"] = "genderNeutral";
})(GenderType || (GenderType = {}));
let student1 = {
    studentID: 123123,
    studentName: 'jackson',
    age: 30,
    gender: 'female',
    subject: 'MongoDB',
    courseCompleted: false
};
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: 'shin',
        age: 21,
        gender: 'male',
        subject: 'javascript',
        courseCompleted: false
    };
}
function saveStudentDetails(student) {
    // student.studentID= 11222;  읽기 전용이라 프로퍼티 읽히지 않는다.
}
// saveStudentDetails(student1);
