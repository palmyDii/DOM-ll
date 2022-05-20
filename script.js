let student = {} 
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

let student2 = {
    name : 'คุณป้า',
    username : 'b@a.com',
    gender : 'หญิง' 
}

let students = [
    student,
    student2,
    {
        name : 'คุณน้า',
        username : 'b@c.com',
        gender : 'หญิง'  
    }
    
]

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
    columnName.classList.add('fw-bold')
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