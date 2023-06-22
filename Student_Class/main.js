class Student 
{
    static nextSid = 10000001;
  
    constructor(firstName, lastName, major, gpa) {
      this.sid = Student.nextSid++;
      this.firstName = firstName;
      this.lastName = lastName;
      this.major = major;
      this.gpa = gpa;
    }
}

const students = [];

// Example usage:
const student1 = new Student('John', 'Doe', 'Computer Science', 3.8);
const student2 = new Student('Jane', 'Smith', 'Mathematics', 3.5);
const student3 = new Student('Dane', 'George', 'Physics', 4.2);
const student4 = new Student('Luke', 'Dayson', 'English', 4.0);
const student5 = new Student('Mark', 'Liston', 'Biology', 3.3);

students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);
students.push(student5);

// Displaying the array of students
students.forEach(student => {
    console.log(`SID: ${student.sid}`);
    console.log(`First Name: ${student.firstName}`);
    console.log(`Last Name: ${student.lastName}`);
    console.log(`Major: ${student.major}`);
    console.log(`GPA: ${student.gpa}`);
    console.log('-----------------------');
  });


    
    const studentsContainer = document.getElementById('studentsContainer');
    const sidInput = document.getElementById('sid');
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const majorInput = document.getElementById('major');
    const gpaInput = document.getElementById('gpa');

    function displayStudentData(student) {
      sidInput.value = student.sid;
      fnameInput.value = student.firstName;
      lnameInput.value = student.lastName;
      majorInput.value = student.major;
      gpaInput.value = student.gpa;
    }

    function FirstResult() {
        currentStudentIndex = 0;
        const currentStudent = students[currentStudentIndex];
        displayStudentData(currentStudent);
        //currentStudentIndex++;
        if (currentStudentIndex >= students.length) {
          currentStudentIndex = 0;
        }
      }

      function NextResult() {
        currentStudentIndex++;
        if (currentStudentIndex >= students.length) {
          //currentStudentIndex = 0;
        }
        const currentStudent = students[currentStudentIndex];
        displayStudentData(currentStudent);
      }


      function PreviousResult() {
        currentStudentIndex--;
        if (currentStudentIndex >= students.length) {
          currentStudentIndex = 0;
        }
        const currentStudent = students[currentStudentIndex];
        displayStudentData(currentStudent);
      }

      function LastResult() {
        currentStudentIndex = students.length - 1;
        if (currentStudentIndex >= students.length) {
          currentStudentIndex = 0;
        }
        const currentStudent = students[currentStudentIndex];
        displayStudentData(currentStudent);
      }

      function addStudent() {
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const major = document.getElementById('major').value;
        const gpa = parseFloat(document.getElementById('gpa').value);
      
        const newStudent = new Student(firstName, lastName, major, gpa);
        students.push(newStudent);
        alert("New Student added");
      
       displayStudentData(newStudent);

      }


      function deleteStudent() {
        if (currentStudentIndex >= 0 && currentStudentIndex < students.length) {
          students.splice(currentStudentIndex, 1);
          if (currentStudentIndex >= students.length) {
            currentStudentIndex = students.length - 1;
          }
          alert("Attention Student Deleted!")
          displayStudentData(students[currentStudentIndex]);
          displayStudentData();
          
        }
      }


      function updateStudentData() {
        if (currentStudentIndex >= 0 && currentStudentIndex < students.length) {
          const firstName = document.getElementById('fname').value;
          const lastName = document.getElementById('lname').value;
          const major = document.getElementById('major').value;
          const gpa = parseFloat(document.getElementById('gpa').value);
      
          const updatedStudent = students[currentStudentIndex];
          updatedStudent.firstName = firstName;
          updatedStudent.lastName = lastName;
          updatedStudent.major = major;
          updatedStudent.gpa = gpa;

          alert("Data updated");
      
          displayStudents();
        }
      }

      function sortStudentsByLastName() {
        students.sort((a, b) => a.lastName.localeCompare(b.lastName));
        displayStudents();
      }

