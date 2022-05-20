let student = {} 
student.name = 'คุณลุง'
student.username = 'a@b.com'
student.gender = 'ชาย'

//document.getElementById('output').innerText = student.name

function addStudentData(student) {
    addDataForm(student, 'ชื่อ', 'name')
    addDataForm(student, 'รหัส', 'username')
    addDataForm(student, 'เพศ', 'gender')
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
    addStudentData(student)
})