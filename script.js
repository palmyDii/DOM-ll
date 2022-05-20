let students = []
let student = {} 
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'
students.push(student)

let student2 = {
    name : 'คุณป้า',
    username : 'b@a.com',
    gender : 'หญิง' 
}
students.push(student2)

//document.getElementById('output').innerText = student.name

function addStudentData(students) {
    for (let stu of students) {
        addDataForm(stu, 'ชื่อ', 'name')
        addDataForm(stu, 'รหัส', 'username')
        addDataForm(stu, 'เพศ', 'gender')
    }
}

function addDataForm(student, topic, needValue) {
    const output = document.getElementById('output')
    let row = document.createElement('div')
    row.classList.add('row')

    let columnName = document.createElement('div')
    columnName.classList.add('col-1')
    columnName.classList.add('offset-1')
    columnName.innerHTML = topic

    let columnValue = document.createElement('div')
    columnValue.classList.add('col')
    columnValue.innerHTML = student[needValue]

    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)
}

window.addEventListener('load', function() {
    addStudentData(students)
})